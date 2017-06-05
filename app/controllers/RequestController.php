<?php

class RequestController extends ControllerBase
{

    public function indexAction() {

    }

    //read data for request page
    public function readAction() {
        $id = $this->request->get("id");
        $db = DbConnection::getConnection();
        $Request = new Request($db);
        $requests = $Request->readUserRequests($id, 0);
        if ($requests === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else {
            echo json_encode($requests);
        }
    }

    //accept one request
    public function acceptAction() {
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
                $Request = new Request($db);
                $delete = $Request->deleteUserRequest($user, $pet);
                if ($delete === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    $Pet = new Pet($db);
                    $action = $Pet->addPetRelative($pet, $user);
                    if ($action === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo 1;
                    }
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //delete one request
    public function deleteAction() {
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
                $Request = new Request($db);
                $delete = $Request->deleteUserRequest($user, $pet);
                if ($delete === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    echo 1;
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}