<?php

class AccountController extends ControllerBase
{
    //* response to user's google login action
    public function googleAction() {
      $this->response
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
        ->sendHeaders();
      $data = $this->request->getJsonRawBody( true );
      $googleToken = $data[ 'token' ];
      $platform = $data[ 'platform' ];
      if ( $platform === 'website' ) {
        $client = new Google_Client([
          'client_id' => '168098850234-fsq84pk4cae97mlj0k464joc21cgqjvv.apps.googleusercontent.com'
        ]);
      } else if ( $platform === 'mobile' ) {
        $client = new Google_Client([
          'client_id' => '835652983909-6if3h222alkttk9oas3hr3tl15sq1u7m.apps.googleusercontent.com'
        ]);
      } else {
        $client = new Google_Client([
          'client_id' => '835652983909-gf89tn5ttgcbkdacintdi0kiqem0968t.apps.googleusercontent.com'
        ]);
      }
      $payload = $client->verifyIdToken( $googleToken );
      if ( $payload ) {
        $googleId = $payload[ 'sub' ];
        try {
            $db = DbConnection::getConnection();
            $User = new User( $db );
            //check if user already registered or not
            $check = $User->checkGoogleId( $googleId );
            if ( !$check ) {
                return json_encode( [ 'id'=> $googleId ] );
            } else {
                //account exist, get user id
                $userId = $check[ 'user_id' ];
                $userName = $check[ 'user_name' ];
                //create token for website
                $Secret = new Secret();
                $newToken = $Secret->getToken( $userId );
                $Token = new Token($db);
                $db->beginTransaction();
                if ( $platform === 'website' ) {
                    $create = $Token->createUserToken( $userId, $newToken, 0 );
                } else {
                    $create = $Token->createUserToken( $userId, $newToken, 1 );
                }
                if ( $create !== 1 && $create !== 2 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return json_encode( [ $userId, $userName, $newToken ] );
            } 
        } catch ( Exception $e ) {
          return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
      } else {
        return $this->response->setStatusCode( 403, 'Forbidden' );
      }
    }

  //* response to user's facebook login action
  public function facebookAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $fbToken = $data[ 'token' ];
    $platform = $data[ 'platform' ];
    $Secret = new Secret();
    $fbSecret = $Secret->getFacebook();
    $access = file_get_contents(
      'https://graph.facebook.com/oauth/access_token?client_id=447688265576125&client_secret=' . $fbSecret . '&grant_type=client_credentials'
    );
    $accessData = json_decode( $access );
    $appToken = $accessData->access_token;
    $verify = file_get_contents(
      'https://graph.facebook.com/debug_token?input_token=' . $fbToken . '&access_token=' . $appToken
    );
    $verifyData = json_decode( $verify );
    $fbId = $verifyData->data->user_id;
    if ( !$fbId ) {
     return $this->response->setStatusCode( 403, 'Forbidden' );
    }
    try {
      $db = DbConnection::getConnection();
      $User = new User( $db );
      //check if user already registered or not
      $check = $User->checkFacebookId( $fbId );
      if ( !$check ) {
        return json_encode( [ 'id' => $fbId ] );
      } 
      //account exist, get user id
      $userId = $check[ 'user_id' ];
      $userName = $check[ 'user_name' ];
      $newToken = $Secret->getToken( $userId );
      $Token = new Token( $db );
      $db->beginTransaction();
      if ( $platform === 'website' ) {
        $create = $Token->createUserToken( $userId, $newToken, 0 );
      } else {
        $create = $Token->createUserToken( $userId, $newToken, 1 );
      }
      if ( $create !== 1 && $create !== 2 ) {
        $db->rollBack();
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
      }
      $db->commit();
      return json_encode( [ $userId, $userName, $newToken ] );
    } catch ( Exception $e ) {
      return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* logout remove token in database
  public function logoutAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $id = ( int ) $data[ 'id' ];
    $token = $data[ 'token' ];
    try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $db->beginTransaction();
        $delete = $Token->deleteUserToken( $id, $token );
        $db->commit();
        return $this->response->setStatusCode( 201, 'Success' );
    } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

}