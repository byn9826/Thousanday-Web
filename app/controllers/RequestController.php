<?php
use Phalcon\Assets\Filters\Cssmin;

class RequestController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/request.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/request.css" )->addCss( "../public/css/request.css" )
            ->join( true )->addFilter( new Cssmin() );
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
    }

    //delete one request
    public function deleteAction() {
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
    }

}