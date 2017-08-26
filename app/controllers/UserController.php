<?php
use Phalcon\Assets\Filters\Cssmin;

class UserController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/user.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/user.css' )
            ->setTargetUri( '/../production/user.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    //* provide data for user page
    //* return user's info, pets' info belong to user, moments' info from pets list and pets' id list
    public function readAction() {
        $id = $this->request->get( 'id' );
        try {
            $db = DbConnection::getConnection();
            $User = new User( $db );
            $user = $User->readOneUser( $id );
            if ( !$user ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } 
            $Pet = new Pet( $db );
            $pets = $Pet->readUserBelong( $id );
            $belong = [];
            foreach ( $pets as $index => $pet ) {
                $belong[ $index ] = $pet[ 'pet_id' ];
            }
            $Moment = new Moment( $db );
            $result = $Moment->readPetsList( $belong, 0 );
            return json_encode( [ $user, $pets, $result, $belong ] );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* load more moments based on user's pets list
    public function loadAction() {
        $data = $this->request->getJsonRawBody( true );
        $load = $data[ 'load' ];
        $belong = $data[ 'belong' ];
        try {
            $db = DbConnection::getConnection();
            $Moment = new Moment( $db );
            $result = $Moment->readPetsList( $belong, $load );
            return json_encode( $result );
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

}