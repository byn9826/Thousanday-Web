<?php
use Phalcon\Assets\Filters\Cssmin;

class MomentController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/moment.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/moment.css' )
            ->setTargetUri( '/../production/moment.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    //* read information for one moment 
    public function readAction() {
        $id = $this->request->get( 'id' );
        try {
            $db = DbConnection::getConnection();
            $Moment = new Moment( $db );
            $moment = $Moment->readOneMoment( $id );
            if ( !$moment ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } 
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $moment[ 'pet_id' ] );
            $Like = new Like( $db );
            $likes = $Like->readMomentLikes( $id );
            $Comment = new Comment( $db );
            $comments = $Comment->readMomentComments( $id, 0, 5 );
            return json_encode( [ $moment, $family, $likes, $comments ] );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* delete one moment
    public function deleteAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token'];
        $moment = ( int ) $data[ 'moment' ];
        $user = ( int ) $data[ 'user' ];
        $pet = ( int ) $data[ 'pet' ];
        try {
            $db = DbConnection::getConnection();
            $Token = new Token( $db );
            $validation = $Token->checkUserToken( $user, $token );
            if ( $validation !== 1 ) { 
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $pet );
            if ( $user === ( int ) $family[ 'owner_id' ] || $user === ( int ) $family[ 'relative_id' ]) {
                $Moment = new Moment( $db );
                $db->beginTransaction();
                $remove = $Moment->hideOneMoment( $moment, $pet );
                if ( $remove !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode(500, 'Internal Server Error');
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode(403, 'Forbidden');
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* user like or dislike a moment
    public function likeAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $moment = ( int ) $data[ 'moment' ];
        $user = ( int ) $data[ 'user' ];
        $action = ( int ) $data['action' ];
        try {
            $db = DbConnection::getConnection();
            $Token = new Token( $db );
            $validation = $Token->checkUserToken( $user, $token );
            if ( $validation !== 1 ) { 
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
            $Like = new Like( $db );
            $db->beginTransaction();
            if ($action === 1) {
                $add = $Like->createUserLike( $moment, $user );
                if ( $add !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
            } else {
                $delete = $Like->deleteUserLike( $moment, $user );
                if ( $delete !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
            }
            $db->commit();
            return $this->response->setStatusCode( 201, 'Success' );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* user comment on one moment
    public function commentAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $moment = ( int ) $data[ 'moment' ];
        $user = ( int ) $data[ 'user' ];
        $content = ( strlen( $data[ 'content' ] ) > 150 ) 
            ? substr( $data[ 'content' ], 0, 150 ) : $data[ 'content' ];
        try {
            $db = DbConnection::getConnection();
            $Token = new Token( $db );
            $validation = $Token->checkUserToken( $user, $token );
            if ( $validation !== 1 ) { 
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
            $Comment = new Comment( $db );
            $db->beginTransaction();
            $create = $Comment->createUserComment( $user, $moment, $content );
            if ( $create !== 1 ) {
                $db->rollBack();
                return $this->response->setStatusCode( 500, 'Internal Server Error' );
            }
            $db->commit();
            return $this->response->setStatusCode( 201, 'Success' );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }    
    }

    //load 10 more comment based on pin
    public function loadAction() {
        $id = ( int ) $this->request->get('id' );
        $load = ( int ) $this->request->get( 'load' );
        $add = ( int ) $this->request->get( 'add' );
        $pin = 5 + $add + $load * 10;
        try {
            $db = DbConnection::getConnection();
            $Comment = new Comment( $db );
            $comments = $Comment->readMomentComments( $id, $pin, 10 );
            return json_encode( $comments );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

}