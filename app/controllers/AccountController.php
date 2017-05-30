<?php

class AccountController extends ControllerBase
{
    //response to user's google login action
    //return 404 for it is not post request
    //return 403 for users not valid
    //return 500 for db error
    public function googleAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $googleToken = $data['token'];
            $platform = $data['platform'];
            $client = new Google_Client(['client_id' => '168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com']);
            $payload = $client->verifyIdToken($googleToken);
            if ($payload) {
                $googleId = $payload['sub'];
                $db = DbConnection::getConnection();
                $User = new User($db);
                //check if user already registered or not
                $check = $User->checkGoogleId($googleId);
                if ($check === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$check) {
                    //account not exist
                    //code later
                    //attention
                } else {
                    //account exist, get user id
                    $userId = $check['user_id'];
                    $userName = $check['user_name'];
                    if ($platform === 'website') {
                        //create token for website
                        $Secret = new Secret();
                        $newToken = $Secret->getToken($userId);
                        $Token = new Token($db);
                        $create = $Token->createUserToken($userId, $newToken, 0);
                        if ($create === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            echo json_encode([$userId, $userName, $newToken]);
                        }
                    } else {
                        //create token for mobile
                        //code later
                        //attention
                    }
                } 
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //response to user's facebook login action
    //return 403 for users not valid
    //return 500 for db error
    //return 404 if it is not post request
    public function facebookAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $fbToken = $data['token'];
            $platform = $data['platform'];
            //validate facebook login
            $Secret = new Secret();
            $fbSecret = $Secret->getFacebook();
            $access = file_get_contents('https://graph.facebook.com/oauth/access_token?client_id=1894566737467263&client_secret=' . $fbSecret . '&grant_type=client_credentials');
            $accessData = json_decode($access);
            $appToken = $accessData->access_token;
            $verify = file_get_contents('https://graph.facebook.com/debug_token?input_token=' . $fbToken . '&access_token=' . $appToken);
            $verifyData = json_decode($verify);
            $fbId = $verifyData->data->user_id;
            if (!$fbId) {
                 $this->response->setStatusCode(403, 'Forbidden');
            } else {
                $db = DbConnection::getConnection();
                $User = new User($db);
                //check if user already registered or not
                $check = $User->checkFacebookId($fbId);
                if ($check === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$check) {
                    //account not exist
                    //code later
                    //attention
                } else {
                    //account exist, get user id
                    $userId = $check['user_id'];
                    $userName = $check['user_name'];
                    if ($platform === 'website') {
                        //create token for website
                        $newToken = $Secret->getToken($userId);
                        $Token = new Token($db);
                        $create = $Token->createUserToken($userId, $newToken, 0);
                        if ($create === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            echo json_encode([$userId, $userName, $newToken]);
                        }
                    } else {
                        //create token for mobile
                        //code later
                        //attention
                    }
                }
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}