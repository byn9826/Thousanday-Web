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

}