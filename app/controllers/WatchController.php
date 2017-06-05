<?php

class WatchController extends ControllerBase
{

    public function indexAction() {

    }

    //read data for watch page
    public function readAction() {
        $id = $this->request->get("id");
        $db = DbConnection::getConnection();
        $Watch = new Watch($db);
        $watch = $Watch->readUserWatchs($id);
        if ($watch === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if (!$watch) {
            echo json_encode([[], [], []]);
        } else {
            $list = array_merge(...$watch);
            $Moment = new Moment($db);
            $moments = $Moment->readPetsList($list, 0);
            if ($moments === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                $Pet = new Pet($db);
                $pets = $Pet->readPetsNames($list);
                if ($pets === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    echo json_encode([$list, $moments, $pets]);
                }
            }
        }
    }

    //remove one pet on watch list
    public function removeAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $pet = (int) $data['pet'];
            $user = (int) $data['user'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Watch = new Watch($db);
                $delete = $Watch->deleteUserWatch($pet, $user);
                if ($delete === 1) {
                    echo 1;
                } else {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //add one pet on watch list
    public function addAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $pet = (int) $data['pet'];
            $user = (int) $data['user'];
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Watch = new Watch($db);
                $add = $Watch->createUserWatch($pet, $user);
                if ($add === 1) {
                    echo 1;
                } else {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                }
            } else {
                $this->response->setStatusCode(403, 'Forbidden');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //load more moment
    public function loadAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $list = $data['list'];
            $route = $data['route'];
            $load = (int) $data['load'];
            $user = (int) $data['user'];
            if ($route === "watch") {
                $db = DbConnection::getConnection();
                $Moment = new Moment($db);
                $moments = $Moment->readPetsList($list, $load);
                if ($moments === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    echo json_encode($moments);
                }
            } else if ($route === "love") {
                $db = DbConnection::getConnection();
                $Like = new Like($db);
                $likes = $Like->readUserLikes($user, $load);
                if ($likes === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$likes) {
                    echo json_encode([]);
                } else {
                    $list = array_merge(...$likes);
                    $Moment = new Moment($db);
                    $moments = $Moment->readMomentsList($list);
                    echo json_encode($moments);
                }
            } else if ($route === "comment") {
                $db = DbConnection::getConnection();
                $Comment = new Comment($db);
                $comments = $Comment->readUserComments($user, $load);
                if ($comments === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if (!$comments) {
                    echo json_encode([]);
                } else {
                    $list = array_merge(...$comments);
                    $Moment = new Moment($db);
                    $moments = $Moment->readMomentsList($list);
                    echo json_encode($moments);
                }
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}