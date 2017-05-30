<?php

class MomentController extends ControllerBase
{

    public function indexAction() {

    }

    //read information for one moment 
    public function readAction() {
        $id = $this->request->get("id");
        $db = DbConnection::getConnection();
        $Moment = new Moment($db);
        $moment = $Moment->readOneMoment($id);
        if ($moment === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if (!$moment) {
            $this->response->setStatusCode(404, 'Not Found');
        } else {
            $Pet = new Pet($db);
            $family = $Pet->readPetFamily($moment['pet_id']);
            if ($family === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                $Like = new Like($db);
                $likes = $Like->readMomentLikes($id);
                if ($likes === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else {
                    $Comment = new Comment($db);
                    $comments = $Comment->readMomentComments($id, 0);
                    if ($comments === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else {
                        echo json_encode([$moment, $family, $likes, $comments]);
                    }
                }
            }
        }
    }

    //delete one moment
    public function deleteAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $moment = (int) $data['moment'];
            $user = (int) $data['user'];
            $pet = (int) $data['pet'];
            //verify token
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                //check if pet belong to user
                $Pet = new Pet($db);
                $family = $Pet->readPetFamily($pet);
                if ($family === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($user === (int) $family['owner_id'] || $user === (int) $family['relative_id']) {
                    //change moment display to 0
                    $Moment = new Moment($db);
                    $remove = $Moment->hideOneMoment($moment, $pet);
                    if ($remove === 0) {
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

    //user like or dislike a moment
    //return 1 for success
    public function likeAction() {
        if ($this->request->isPost()) {
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $moment = (int) $data['moment'];
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
                    //add like for current user
                    $Like = new Like($db);
                    $add = $Like->createUserLike($moment, $user);
                    if ($add === 1) {
                        echo 1;
                    } else {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    }
                } else {
                    //remove like for current user
                    $Like = new Like($db);
                    $delete = $Like->deleteUserLike($moment, $user);
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

    //user comment on one moment
    public function commentAction() {
        if ($this->request->isPost()) {  
            $data = $this->request->getJsonRawBody(true);
            $token = $data['token'];
            $moment = (int) $data['moment'];
            $user = (int) $data['user'];
            $content = (strlen($data['content']) > 150)?substr($data['content'], 0, 150):$data['content'];
            //verify token
            $db = DbConnection::getConnection();
            $Token = new Token($db);
            $validation = $Token->checkUserToken($user, $token);
            if ($validation === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else if ($validation === 1) {
                $Comment = new Comment($db);
                $create = $Comment->createUserComment($user, $moment, $content);
                if ($create === 0) {
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