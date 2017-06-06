<?php

class UploadController extends ControllerBase
{

    //upload new moment image
    public function momentAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image/bmp"];
            if (in_array($fileType, $whiteList)) {
                $content = $this->request->getPost("message");
                $message = (strlen($content) > 120)?substr($content, 0, 120):$content;
                $pet = (int) $this->request->getPost("pet");
                $user = (int) $this->request->getPost("user");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $Pet = new Pet($db);
                    $family = $Pet->readPetFamily($pet);
                    if ($user == $family['owner_id'] || $user == $family['relative_id']) {
                        $time = time();
                        $image = $time . $files[0]->getName();
                        $upload = __DIR__ . '/../../public/img/pet/' . $pet . '/moment/';
                        if (!is_dir($upload)) {
                            mkdir($upload, 0755);
                        }
                        $files[0]->moveTo($upload . $image);
                        $Moment = new Moment($db);
                        $moments = $Moment->createNewMoment($image, $message, $pet);
                        if ($moments === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            echo json_encode([$moments, $image]);
                        }
                    } else {
                        $this->response->setStatusCode(403, 'Forbidden');
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //upload user's avatar
    public function userAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image\/png"];
            if (in_array($fileType, $whiteList)) {
                $user = (int) $this->request->getPost("user");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $image = $user . ".jpg";
                    $upload = __DIR__ . '/../../public/img/user/';
                    if (!is_dir($upload)) {
                        mkdir($upload, 0755);
                    }
                    $files[0]->moveTo($upload . $image);
                    echo 1;
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //upload pet's avatar
    public function petAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image\/png"];
            if (in_array($fileType, $whiteList)) {
                $user = (int) $this->request->getPost("user");
                $pet = (int) $this->request->getPost("pet");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $Pet = new Pet($db);
                    $data = $Pet->readPetFamily($pet);
                    if ($data === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else if (!$data) {
                        $this->response->setStatusCode(404, 'Not Found');
                    } else if ($user === (int) $data['owner_id'] || $user === (int) $data['relative_id']) {
                        $image = "0.png";
                        $upload = __DIR__ . '/../../public/img/pet/' . $pet . '/';
                        if (!is_dir($upload)) {
                            mkdir($upload, 0755);
                        }
                        $files[0]->moveTo($upload . $image);
                        echo 1;
                    } else {
                        $this->response->setStatusCode(403, 'Forbidden');
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //create new pet
    public function addAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image\/png"];
            if (in_array($fileType, $whiteList)) {
                $user = (int) $this->request->getPost("user");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $content = $this->request->getPost("name");
                    $name = (strlen($content) > 10)?substr($content, 0, 10):$content;
                    $gender = (int) $this->request->getPost("gender");
                    $type = (int) $this->request->getPost("type");
                    $nature = (int) $this->request->getPost("nature");
                    $Pet = new Pet($db);
                    $create = $Pet->createNewPet($name, $gender, $type, $nature, $user);
                    if ($create === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        $upload = __DIR__ . '/../../public/img/pet/' . $create . '/';
                        if (!is_dir($upload)) {
                            mkdir($upload, 0755);
                        }
                        $files[0]->moveTo($upload . "0.png");
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //create new user
    public function createAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image\/png"];
            if (in_array($fileType, $whiteList)) {
                $content = $this->request->getPost("name");
                $name = (strlen($content) > 10)?substr($content, 0, 10):$content;
                $id = $this->request->getPost("id");
                $platform = $this->request->getPost("platform");
                $token = $this->request->getPost("token");
                $method = $this->request->getPost("method");
                if ($platform === "google") {
                    if ($method === "website") {
                        $client = new Google_Client(['client_id' => '168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com']);
                    } else {
                        $client = new Google_Client(['client_id' => '835652983909-6if3h222alkttk9oas3hr3tl15sq1u7m.apps.googleusercontent.com']);
                    }
                    $payload = $client->verifyIdToken($token);
                    if ($payload) {
                        $googleId = $payload['sub'];
                        $db = DbConnection::getConnection();
                        $User = new User($db);
                        $create = $User->createGoogleUser($googleId, $name);
                        if ($create === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            if ($method === "website") {
                                $Secret = new Secret();
                                $newToken = $Secret->getToken($create);
                                $Token = new Token($db);
                                $login = $Token->createUserToken($create, $newToken, 0);
                                if ($login === 0) {
                                    $this->response->setStatusCode(500, 'Internal Server Error');
                                }
                            }
                            $upload = __DIR__ . '/../../public/img/user/';
                            if (!is_dir($upload)) {
                                mkdir($upload, 0755);
                            }
                            $files[0]->moveTo($upload . $create . '.jpg');
                            echo json_encode([$create, $newToken]);
                        }
                    } else {
                        $this->response->setStatusCode(403, 'Forbidden');
                    }
                } else {
                    $Secret = new Secret();
                    $fbSecret = $Secret->getFacebook();
                    $access = file_get_contents('https://graph.facebook.com/oauth/access_token?client_id=447688265576125&client_secret=' . $fbSecret . '&grant_type=client_credentials');
                    $accessData = json_decode($access);
                    $appToken = $accessData->access_token;
                    $verify = file_get_contents('https://graph.facebook.com/debug_token?input_token=' . $token . '&access_token=' . $appToken);
                    $verifyData = json_decode($verify);
                    $fbId = $verifyData->data->user_id;
                    if (!$fbId) {
                        $this->response->setStatusCode(403, 'Forbidden');
                    } else {
                        $db = DbConnection::getConnection();
                        $User = new User($db);
                        $create = $User->createFacebookUser($fbId, $name);
                        if ($create === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            if ($method === "website") {
                                $Secret = new Secret();
                                $newToken = $Secret->getToken($create);
                                $Token = new Token($db);
                                $login = $Token->createUserToken($create, $newToken, 0);
                                if ($login === 0) {
                                    $this->response->setStatusCode(500, 'Internal Server Error');
                                }
                            } else {
                                $Secret = new Secret();
                                $newToken = $Secret->getToken($create);
                                $Token = new Token($db);
                                $login = $Token->createUserToken($create, $newToken, 1);
                                if ($login === 0) {
                                    $this->response->setStatusCode(500, 'Internal Server Error');
                                }
                            }
                            $upload = __DIR__ . '/../../public/img/user/';
                            if (!is_dir($upload)) {
                                mkdir($upload, 0755);
                            }
                            $files[0]->moveTo($upload . $create . '.jpg');
                            echo json_encode([$create, $newToken]);
                        }
                    }
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}