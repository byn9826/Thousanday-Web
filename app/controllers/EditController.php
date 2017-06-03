<?php

class EditController extends ControllerBase
{

    public function indexAction() {

    }

    //read pet data
    public function readAction() {
        $pet = (int) $this->request->get("pet");
        $user = (int) $this->request->get("user");
        $db = DbConnection::getConnection();
        $Pet = new Pet($db);
        $data = $Pet->readOnePet($pet);
        if ($data === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if (!$data) {
            $this->response->setStatusCode(404, 'Not Found');
        } else if ($user === (int) $data['owner_id'] || $user === (int) $data['relative_id']) {
            echo json_encode($data);
        } else {
            $this->response->setStatusCode(403, 'Forbidden');
        }
    }

    //update pet name
    public function nameAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $user = (int) $data['user'];
            $pet = (int) $data['pet'];
            $update = $data['name'];
            $name = (strlen($update) > 10)?substr($update, 0, 10):$update;
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$family) {
                    $this->response->setStatusCode(404, 'Not Found');
                } else if ($user === (int) $family['owner_id'] || $user === (int) $family['relative_id']) {
                    $action = $Pet->updatePetName($pet, $name);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }
    
    //end relationship of one pet
    public function endAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $user = (int) $data['user'];
            $pet = (int) $data['pet'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$family) {
                    $this->response->setStatusCode(404, 'Not Found');
                } else if ($user === (int) $family['relative_id']) {
                    $action = $Pet->endPetRelation($pet);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //search user name by id
    public function searchAction() {
        $id = (int) $this->request->get("id");
        $db = DbConnection::getConnection();
        $User = new User($db);
        $user = $User->readUserName($id);
        if ($user === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else {
            echo json_encode($user);
        }
    }

    //add relative for one pet
    public function addAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $user = (int) $data['user'];
            $pet = (int) $data['pet'];
            $add = (int) $data['add'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$family) {
                    $this->response->setStatusCode(404, 'Not Found');
                } else if ($user === (int) $family['owner_id']) {
                    $Request = new Request($db);
                    $action = $Request->createPetRequest($user, $add, $pet);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //remove relative for one pet
    public function removeAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $user = (int) $data['user'];
            $pet = (int) $data['pet'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$family) {
                    $this->response->setStatusCode(404, 'Not Found');
                } else if ($user === (int) $family['owner_id']) {
                    $action = $Pet->endPetRelation($pet);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //transfer ownership to relative
    public function transferAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $user = (int) $data['user'];
            $relative = (int) $data['relative'];
            $pet = (int) $data['pet'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$family) {
                    $this->response->setStatusCode(404, 'Not Found');
                } else if ($user === (int) $family['owner_id'] && $relative === (int) $family['relative_id']) {
                    $action = $Pet->transferPetOwner($pet, $user, $relative);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}