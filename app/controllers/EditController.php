<?php
use Phalcon\Assets\Filters\Cssmin;

class EditController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/edit.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/edit.css' )
            ->setTargetUri( '/../production/edit.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    //* read pet data
    public function readAction() {
        $pet = ( int ) $this->request->get( 'pet' );
        $user = ( int ) $this->request->get( 'user' );
        try {
            $db = DbConnection::getConnection();
            $Pet = new Pet( $db );
            $data = $Pet->readOnePet( $pet );
            if ( !$data ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $data[ 'owner_id' ] || $user === ( int ) $data[ 'relative_id' ] ) {
                return json_encode( $data );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* update pet name
    public function nameAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $user = ( int ) $data[ 'user' ];
        $pet = ( int ) $data[ 'pet' ];
        $update = $data[ 'name' ];
        $name = strlen( $update ) > 10 ? substr( $update, 0, 10 ) : $update;
        try {
            $db = DbConnection::getConnection();
            $Token = new Token( $db );
            $validation = $Token->checkUserToken( $user, $token );
            if ( $validation !== 1 ) { 
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $pet );
            if ( !$family ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $family[ 'owner_id' ] || $user === ( int ) $family[ 'relative_id' ] ) {
                $db->beginTransaction();
                $action = $Pet->updatePetName( $pet, $name );
                if ( $action !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }
    
    //* end relationship of one pet
    public function endAction() {
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
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $pet );
            if ( !$family ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $family[ 'relative_id' ] ) {
                $db->beginTransaction();
                $action = $Pet->endPetRelation( $pet );
                if ( $action !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* search user name by id
    public function searchAction() {
        $id = ( int ) $this->request->get( 'id' );
        try {
            $db = DbConnection::getConnection();
            $User = new User( $db );
            $user = $User->readUserName( $id );
            return json_encode($user);
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* add relative for one pet
    public function addAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $user = ( int ) $data[ 'user' ];
        $pet = ( int ) $data[ 'pet' ];
        $add = ( int ) $data[ 'add' ];
        try {
            $db = DbConnection::getConnection();
            $Token = new Token( $db );
            $validation = $Token->checkUserToken( $user, $token );
            if ( $validation !== 1 ) { 
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $pet );
            if ( !$family ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $family[ 'owner_id' ] ) {
                $Request = new Request( $db );
                $db->beginTransaction();
                $action = $Request->createPetRequest( $user, $add, $pet );
                if ( $action !== 1 && $action !== 0 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* remove relative for one pet
    public function removeAction() {
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
            $Pet = new Pet( $db );
            $family = $Pet->readPetFamily( $pet );
            if ( !$family ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $family[ 'owner_id' ]) {
                $db->beginTransaction();
                $action = $Pet->endPetRelation($pet);
                if ( $action !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

    //* transfer ownership to relative
    public function transferAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $user = ( int ) $data[ 'user' ];
        $relative = ( int ) $data[ 'relative' ];
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
            if ( !$family ) {
                return $this->response->setStatusCode( 404, 'Not Found' );
            } else if ( $user === ( int ) $family[ 'owner_id' ] && $relative === ( int ) $family[ 'relative_id' ] ) {
                $db->beginTransaction();
                $action = $Pet->transferPetOwner( $pet, $user, $relative );
                if ( $action !== 1 ) {
                    $db->rollBack();
                    return $this->response->setStatusCode( 500, 'Internal Server Error' );
                }
                $db->commit();
                return $this->response->setStatusCode( 201, 'Success' );
            } else {
                return $this->response->setStatusCode( 403, 'Forbidden' );
            }
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        } 
    }

}