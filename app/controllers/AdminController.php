<?php

use Phalcon\Paginator\Adapter\Model as PaginatorModel;

class adminController extends ControllerBase {

    public function beforeExecuteRoute($dispatcher) {
        $permission = $this->session->get('permission');
        if ($permission !== 'pass' && $dispatcher->getActionName() !== 'permission') {
            $this->view->pick('admin/permission');
            return false;
        }
    }
    
    public function permissionAction() {
        $id = (int) $this->request->get('id');
        $token = $this->request->get('token');
        $validation = Tokens::findFirst([
            "user_id" => $id,
            "user_token" => $token,
            "user_type" => '1'
        ]);
        $params = new Params();
        if(isset($validation)) {
            $this->session->set('permission', 'pass');
            $this->dispatcher->forward([
                "controller" => "admin",
                "action" => "index"
            ]);
        }
        return $this->response->setStatusCode(403, 'Permission Denied');
    }
    
    public function indexAction() {
        
    }

    public function listAction() {
        $this->assets->addCss('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css', false);
        $page = (int) $this->request->get('page');
        if (!isset($page)) {
            $page = 1;
        }
        $params = $this->dispatcher->getParams()[0];
        switch ($params) {
            case 'pet':
                $data = Pets::find();
                $this->view->pick('admin/petsList');
                break;
            case 'user':
                $data = Users::find();
                $this->view->pick('admin/usersList');
                break;
            case 'moment':
                $data = Moments::find();
                $this->view->pick('admin/momentsList');
                break;
            case 'comment':
                $data = Comments::find();
                $this->view->pick('admin/commentsList');
                break;
        }
        
        $paginator = new PaginatorModel([
            'data'  => $data,
            'limit' => 10,
            'page'  => $page
        ]);
        $this->view->data = $paginator->getPaginate();
    }
    
    public function readAction() {
        // $params = $this->dispatcher->getParams()[0];
        // switch ($params) {
        //     case 'pet':
        //         $model = 'Pets';
        //         break;
        //     default:
        //         return $this->response->setStatusCode(404);
        // }
        
        // $builder = $this->modelsManager->createBuilder()
        //                   ->from($model);
        // $dataTables = new DataTable();
        // $dataTables->fromBuilder($builder)->sendResponse();
    }

}