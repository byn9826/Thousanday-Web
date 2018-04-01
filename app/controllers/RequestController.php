<?php

class RequestController extends ControllerBase {

  //* read data for request page
  public function readAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $id = $this->request->get( 'id' );
    try {
      $db = DbConnection::getConnection();
      $Request = new Request( $db );
      $requests = $Request->readUserRequests( $id, 0 );
      return json_encode($requests);
    } catch ( Exception $e ) {
      return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* accept one request
  public function acceptAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $token = $data[ 'token' ];
    $user = ( int ) $data[ 'user' ];
    $pet = ( int ) $data[ 'pet' ];
    try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $validation = $Token->checkUserToken( $user, $token );
        if ( $validation !== 1 ) { 
            return $this->response->setStatusCode( 403, 'Forbidden' );
        }
        $Request = new Request($db);
        $db->beginTransaction();
        $delete = $Request->deleteUserRequest( $user, $pet );
        if ( $delete !== 1 ) {
            $db->rollBack();
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
        $Pet = new Pet( $db );
        $action = $Pet->addPetRelative( $pet, $user );
        if ( $action !== 1 ) {
            $db->rollBack();
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
        $db->commit();
        return $this->response->setStatusCode( 201, 'Success' );
    } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

  //* delete one request
  public function deleteAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody( true );
    $token = $data[ 'token' ];
    $user = ( int ) $data[ 'user' ];
    $pet = ( int ) $data[ 'pet' ];
    try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $validation = $Token->checkUserToken( $user, $token );
        if ( $validation !== 1 ) { 
            return $this->response->setStatusCode( 403, 'Forbidden' );
        }
        $Request = new Request($db);
        $db->beginTransaction();
        $delete = $Request->deleteUserRequest( $user, $pet );
        if ( $delete !== 1 ) {
            $db->rollBack();
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
        $db->commit();
        return $this->response->setStatusCode( 201, 'Success' );
    } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
    }
  }

}