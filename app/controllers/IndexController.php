<?php

class IndexController extends ControllerBase
{

    public function indexAction() {

    }

    //init public page, read 20 most recent public moments
    //if can't read db, return 500
    public function readAction() {
        $load = (int) $this->request->get("load");
        $db = DbConnection::getConnection();
        $Moment = new Moment($db);
        $moments = json_encode($Moment->readPublicMoments($load));
        if ($moments === 0) {
            $this->response->setStatusCode(500, "Internal Server Error");
        } else {
            echo $moments;
        }
    }

}

