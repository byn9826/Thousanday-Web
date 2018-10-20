<?php

class SettingController extends ControllerBase {

  //* read information for one user
  public function readAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $id = $this->request->get( 'id' );
    try {
        $db = DbConnection::getConnection();
        $User = new User( $db );
        $user = $User->readOneUser( $id );
        if ( !$user ) {
            return $this->response->setStatusCode( 404, 'Not Found' );
        } 
        return json_encode( $user );
    } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* update user name
  public function nameAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $token = $data[ 'token' ];
    $user = ( int ) $data[ 'user' ];
    $update = $data[ 'name' ];
    $name = ( strlen( $update ) > 10 ) ? substr( $update, 0, 10 ) : $update;
    try {
      $db = DbConnection::getConnection();
      $Token = new Token( $db );
      $validation = $Token->checkUserToken( $user, $token );
      if ( $validation !== 1 ) { 
          return $this->response->setStatusCode( 403, 'Forbidden' );
      }
      $User = new User( $db );
      $db->beginTransaction();
      $action = $User->updateUserName( $user, $name );
      if ( $action !== 1 ) {
        $db->rollBack();
        return $this->response->setStatusCode(500, 'Internal Server Error');
      } 
      $db->commit();
      return $this->response->setStatusCode( 201, 'Success' );
    } catch ( Exception $e ) {
      return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* update user about
  public function aboutAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $token = $data[ 'token' ];
    $user = ( int ) $data[ 'user' ];
    $update = $data[ 'about' ];
    $about = ( strlen( $update ) > 30 ) ? substr( $update, 0, 30 ) : $update;
    try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $validation = $Token->checkUserToken( $user, $token );
        if ( $validation !== 1 ) { 
            return $this->response->setStatusCode( 403, 'Forbidden' );
        }
        $User = new User( $db );
        $db->beginTransaction();
        $action = $User->updateUserAbout($user, $about);
        if ( $action !== 1 ) {
            $db->rollBack();
            return $this->response->setStatusCode(500, 'Internal Server Error');
        } 
        $db->commit();
        return $this->response->setStatusCode( 201, 'Success' );
    } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

}