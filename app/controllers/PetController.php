<?php

class PetController extends ControllerBase
{

    public function indexAction() {

    }

    //read information for one moment 
    public function readAction() {
        $id = $this->request->get("id");
        $db = DbConnection::getConnection();
        $Pet = new Pet($db);
        $pet = $Pet->readOnePet($id);
        if ($pet === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if (!$pet) {
            $this->response->setStatusCode(404, 'Not Found');
        } else {
            if (isset($pet['relative_id'])) {
                //if pet has relative
                $User = new User($db);
                $family = $User->readPetFamily($pet['owner_id'], $pet['relative_id']);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    $friends = $Pet->readUsersPets($pet['owner_id'], $pet['relative_id']);
                    if ($friends === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo json_encode([$pet, $family, $friends]);
                    }
                }
            } else {
                //if pet do not have relative
                $User = new User($db);
                $family = $User->readPetOwner($pet['owner_id']);
            }
        }
    }
}