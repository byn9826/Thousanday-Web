<?php

class PetController extends ControllerBase
{

    public function indexAction() {

    }

    //read information for one pet
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
            $Moment = new Moment($db);
            $moments = $Moment->readPetMoments($id, 0);
            if ($moments === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                $Watch = new Watch($db);
                $watchs = $Watch->readPetWatchs($id);
                if ($watchs === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    if (isset($pet['relative_id'])) {
                        //if pet has relative
                        $User = new User($db);
                        $family = $User->readPetFamily($pet['owner_id'], $pet['relative_id']);
                        if ($family === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            $friends = $Pet->readPetFriends($pet['owner_id'], $pet['relative_id'], $id);
                            if ($friends === 0) {
                                $this->response->setStatusCode(500, 'Internal Server Error');
                            } else {
                                echo json_encode([$pet, $family, $friends, $moments, $watchs]);
                            }
                        }
                    } else {
                        //if pet do not have relative
                        $User = new User($db);
                        $family = $User->readUserName($pet['owner_id']);
                        if ($family === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            $friends = $Pet->readUserPets($pet['owner_id'], $id);
                            if ($friends === 0) {
                                $this->response->setStatusCode(500, 'Internal Server Error');
                            } else {
                                echo json_encode([$pet, [$family], $friends, $moments, $watchs]);
                            }
                        }
                    }
                }

                    
            }
        }
    }

    //load mor pets moments
    public function loadAction() {
        $pet = $this->request->get("pet");
        $load = (int) $this->request->get("load");
        $db = DbConnection::getConnection();
        $Moment = new Moment($db);
        $moments = $Moment->readPetMoments($pet, $load);
        if ($moments === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else {
            echo json_encode($moments);
        }
    }

    //user watch or unwatch a pet
    public function watchAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $pet = (int) $data['pet'];
            $user = (int) $data['user'];
            $action = (int) $data['action'];
            //verify token
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                if ($action === 1) {
                    //add watch for current pet
                    $Watch = new Watch($db);
                    $add = $Watch->createUserWatch($pet, $user);
                    if ($add === 1) {
                        echo 1;
                    } else {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    }
                } else {
                    //remove watch
                    $Watch = new Watch($db);
                    $delete = $Watch->deleteUserWatch($pet, $user);
                    if ($delete === 1) {
                        echo 1;
                    } else {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    }
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}