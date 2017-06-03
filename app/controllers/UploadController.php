<?php

class UploadController extends ControllerBase
{

    //upload new moment image
    public function momentAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg", "image/jpeg", "image/bmp"];
            if (in_array($fileType, $whiteList)) {
                $content = $this->request->getPost("message");
                $message = (strlen($content) > 120)?substr($content, 0, 120):$content;
                $pet = (int) $this->request->getPost("pet");
                $user = (int) $this->request->getPost("user");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $Pet = new Pet($db);
                    $family = $Pet->readPetFamily($pet);
                    if ($user == $family['owner_id'] || $user == $family['relative_id']) {
                        $time = time();
                        $image = $time . $files[0]->getName();
                        $upload = __DIR__ . '/../../public/img/pet/' . $pet . '/moment/';
                        if (!is_dir($upload)) {
                            mkdir($upload, 0755);
                        }
                        $files[0]->moveTo($upload . $image);
                        $Moment = new Moment($db);
                        $moments = $Moment->createNewMoment($image, $message, $pet);
                        if ($moments === 0) {
                            $this->response->setStatusCode(500, 'Internal Server Error');
                        } else {
                            echo json_encode([$moments, $image]);
                        }
                    } else {
                        $this->response->setStatusCode(403, 'Forbidden');
                    }
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //upload user's avatar
    public function userAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = ["image/png", "image/jpg"];
            if (in_array($fileType, $whiteList)) {
                $user = (int) $this->request->getPost("user");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $image = $user . ".jpg";
                    $upload = __DIR__ . '/../../public/img/user/';
                    if (!is_dir($upload)) {
                        mkdir($upload, 0755);
                    }
                    $files[0]->moveTo($upload . $image);
                    echo 1;
                } else {
                    $this->response->setStatusCode(403, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

    //upload pet's avatar
    public function petAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            if ($fileType === "image/png") {
                $user = (int) $this->request->getPost("user");
                $pet = (int) $this->request->getPost("pet");
                $token = $this->request->getPost("token");
                $db = DbConnection::getConnection();
                $Token = new Token($db);
                $validation = $Token->checkUserToken($user, $token);
                if ($validation === 0) {
                    $this->response->setStatusCode(500, 'Internal Server Error');
                } else if ($validation === 1) {
                    $Pet = new Pet($db);
                    $data = $Pet->readPetFamily($pet);
                    if ($data === 0) {
                        $this->response->setStatusCode(500, 'Internal Server Error');
                    } else if (!$data) {
                        $this->response->setStatusCode(404, 'Not Found');
                    } else if ($user === (int) $data['owner_id'] || $user === (int) $data['relative_id']) {
                        $image = "0.png";
                        $upload = __DIR__ . '/../../public/img/pet/' . $pet . '/';
                        if (!is_dir($upload)) {
                            mkdir($upload, 0755);
                        }
                        $files[0]->moveTo($upload . $image);
                        echo 1;
                    } else {
                        $this->response->setStatusCode(403, 'Forbidden');
                    }
                } else {
                    $this->response->setStatusCode(404, 'Forbidden');
                }
            } else {
                $this->response->setStatusCode(500, 'Internal Server Error');
            }
        } else {
            $this->response->setStatusCode(404, 'Not Found');
        }
    }

}