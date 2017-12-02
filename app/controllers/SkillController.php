<?php

class SkillController extends ControllerBase {
    
    //list all skills
    public function readAction() {
        return json_encode( Skills::$all );
    }
    
    //update a pet's skill
    public function buildAction() {
        $data = $this->request->getJsonRawBody( true );
        $token = $data[ 'token' ];
        $user = ( int ) $data[ 'user' ];
        $pet = ( int ) $data[ 'pet' ];
        $index = $data[ 'index' ];
        $name= $data[ 'name' ];
        $skill= $data[ 'skill' ];
        $image = ( int ) $data[ 'image' ];
        if ($index > 3 || $skill >= count(Skills::$all)) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
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
                $name = strlen( $name ) > 10 ? substr( $name, 0, 10 ) : $name;
                $action = $Pet->updatePetSkill( $index, $name, $skill, $image, $pet );
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