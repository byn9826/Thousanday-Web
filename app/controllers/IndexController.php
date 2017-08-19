<?php
use Phalcon\Assets\Filters\Cssmin;

class IndexController extends ControllerBase {

    //load dependencies for public page
    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/public.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/public.css" )->addCss( "../public/css/public.css" )
            ->join( true )->addFilter( new Cssmin() );
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

