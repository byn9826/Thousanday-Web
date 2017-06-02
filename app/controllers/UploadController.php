<?php

class UploadController extends ControllerBase
{

    public function momentAction() {
        if ($this->request->hasFiles() && $this->request->isPost()) {
            $files = $this->request->getUploadedFiles();
            $fileType = $files[0]->getRealType();
            $whiteList = array("image/jpeg", "image/png", "image/jpg", "image/jpeg", "image/bmp");
            if (in_array($fileType, $whiteList)) {
                $message = $this->request->getPost("message");
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

}