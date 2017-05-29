<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {

    }

    //init public page, read 20 most recent public moments
    //if not post request, return 404
    //if can't read db, return 500
    public function initAction()
    {
        if ($this->request->isPost()) {
            $db = DbConnection::getConnection();
            $Moment = new Moment($db);
            $moments = json_encode($Moment->readPublicMoments(0));
            if ($moments === 0) {
                $this->response->setStatusCode(500, "Internal Server Error");
            } else {
                echo $moments;
            }
        } else {
            $this->response->setStatusCode(404, "Not Found");
        }
    }

}

