<?php
use Phalcon\Assets\Filters\Cssmin;

class WatchController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/watch.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/watch.css' )
            ->setTargetUri( '/../production/watch.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    //* provide data for watch page
    //* return pets' id list, moments list, pets' name list
    public function readAction() {
      $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
      $id = $this->request->get( 'id' );
      try {
        $db = DbConnection::getConnection();
        $Watch = new Watch( $db );
        $watch = $Watch->readUserWatchs( $id );
        if ( !$watch ) {
          return json_encode( [ [], [], [] ] );
        }
        $list = array_merge( ...$watch );
        $Moment = new Moment( $db );
        $moments = $Moment->readPetsList( $list, 0 );
        $Pet = new Pet( $db );
        $pets = $Pet->readPetsNames( $list );
        return json_encode([ $list, $moments, $pets ]);
      } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
      }
    }

    //* remove one pet on user's watch list
    //* return 201 code for success
    public function removeAction() {
      $this->response
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
        ->setHeader("Content-Type", 'text/plain')
        ->sendHeaders();
      $data = $this->request->getJsonRawBody( true );
      $token = $data[ 'token' ];
      $pet = (int) $data[ 'pet' ];
      $user = (int) $data[ 'user' ];
      try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $validation = $Token->checkUserToken( $user, $token );
        if ( $validation !== 1 ) { 
            return $this->response->setStatusCode( 403, 'Forbidden' );
        }
        $Watch = new Watch( $db );
        $db->beginTransaction();
        $delete = $Watch->deleteUserWatch( $pet, $user );
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

    //* add one pet on user's watch list
    //* return 201 code for success
    public function addAction() {
      $this->response
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
        ->setHeader("Content-Type", 'text/plain')
        ->sendHeaders();
      $data = $this->request->getJsonRawBody( true );
      $token = $data[ 'token' ];
      $pet = ( int ) $data[ 'pet' ];
      $user = ( int ) $data[ 'user' ];
      try {
        $db = DbConnection::getConnection();
        $Token = new Token( $db );
        $validation = $Token->checkUserToken( $user, $token );
        if ( $validation !== 1 ) { 
            return $this->response->setStatusCode( 403, 'Forbidden' );
        }
        $Watch = new Watch( $db );
        $db->beginTransaction();
        $add = $Watch->createUserWatch( $pet, $user );
        if ( $add !== 1 ) {
            $db->rollBack();
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
        $db->commit();
        return $this->response->setStatusCode( 201, 'Success' );
      } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
      }
    }

    //* load more moments for watch page based on watch, love or comment list
    public function loadAction() {
      $this->response
        ->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
        ->setHeader("Content-Type", 'text/plain')
        ->sendHeaders();
      $data = $this->request->getJsonRawBody( true );
      $list = $data[ 'list' ];
      $route = $data[ 'route' ];
      $load = ( int ) $data[ 'load' ];
      $user = ( int ) $data[ 'user' ];
      try {
        $db = DbConnection::getConnection();
        if ( $route === 'watch' ) {
            $Moment = new Moment( $db );
            $moments = $Moment->readPetsList( $list, $load );
            return json_encode($moments);
        } else if ($route === 'love') {
            $Like = new Like($db);
            $likes = $Like->readUserLikes($user, $load);
            if ( !$likes ) {
                return json_encode( [] );
            } 
            $list = array_merge( ...$likes );
            $Moment = new Moment( $db );
            $moments = $Moment->readMomentsList( $list );
            return json_encode( $moments );
        } else if ( $route === 'comment' ) {
            $Comment = new Comment( $db );
            $comments = $Comment->readUserComments( $user, $load );
            if ( !$comments ) {
                return json_encode( [] );
            }
            $list = array_merge( ...$comments );
            $Moment = new Moment( $db );
            $moments = $Moment->readMomentsList( $list );
            return json_encode( $moments );
        }
      } catch ( Exception $e ) {
        return $this->response->setStatusCode( 500, 'Internal Server Error' );
      }
    }

}