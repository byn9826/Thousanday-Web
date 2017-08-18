<?php

class UserController extends ControllerBase
{

    public function indexAction() {

    }

    //read information for one user
    public function readAction() {
        $id = $this->request->get("id");
        $db = DbConnection::getConnection();
        $User = new User($db);
        $user = $User->readOneUser($id);
        if ($user === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if (!$user) {
            $this->response->setStatusCode(404, 'Not Found');
        } else {
            $Pet = new Pet($db);
            $pets = $Pet->readUserBelong($id);
            if ($pets === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                $belong = [];
                foreach ($pets as $index => $pet) {
                    $belong[$index] = $pet['pet_id'];
                }
                $Moment = new Moment($db);
                $result = $Moment->readPetsList($belong, 0);
                if ($result === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    echo json_encode([$user, $pets, $result, $belong]);
                }
            }
        }
    }

    //load more moments for user
    public function loadAction() {
        $data = $this->request->getJsonRawBody(true);
        $load = $data['load'];
        $belong = $data['belong'];
        $db = DbConnection::getConnection();
        $Moment = new Moment($db);
        $result = $Moment->readPetsList($belong, $load);
        if ($result === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else {
            echo json_encode($result);
        }
    }

}