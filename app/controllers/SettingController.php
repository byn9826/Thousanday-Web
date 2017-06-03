<?php

class SettingController extends ControllerBase
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
            echo json_encode($user);
        }
    }
    
}