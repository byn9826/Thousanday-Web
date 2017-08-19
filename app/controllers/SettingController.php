<?php
use Phalcon\Assets\Filters\Cssmin;

class SettingController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/setting.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/setting.css" )->addCss( "../public/css/setting.css" )
            ->join( true )->addFilter( new Cssmin() );
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

    //update user name
    public function nameAction() {
        $data = $this->request->getJsonRawBody(true);
        $token = $data['token'];
        $user = (int) $data['user'];
        $update = $data['name'];
        $name = (strlen($update) > 10)?substr($update, 0, 10):$update;
        $db = DbConnection::getConnection();
        $Token = new Token($db);
        $validation = $Token->checkUserToken($user, $token);
        if ($validation === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if ($validation === 1) {
            $User = new User($db);
            $action = $User->updateUserName($user, $name);
            if ($action === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                echo 1;
            }
        } else {
            $this->response->setStatusCode(403, 'Forbidden');
        }
    }
    
    //update user about
    public function aboutAction() {
        $data = $this->request->getJsonRawBody(true);
        $token = $data['token'];
        $user = (int) $data['user'];
        $update = $data['about'];
        $about = (strlen($update) > 30)?substr($update, 0, 30):$update;
        $db = DbConnection::getConnection();
        $Token = new Token($db);
        $validation = $Token->checkUserToken($user, $token);
        if ($validation === 0) {
            $this->response->setStatusCode(500, 'Internal Server Error');
        } else if ($validation === 1) {
            $User = new User($db);
            $action = $User->updateUserAbout($user, $about);
            if ($action === 0) {
                $this->response->setStatusCode(500, 'Internal Server Error');
            } else {
                echo 1;
            }
        } else {
            $this->response->setStatusCode(403, 'Forbidden');
        }
    }

}