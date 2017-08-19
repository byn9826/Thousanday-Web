<?php
use Phalcon\Assets\Filters\Cssmin;

class ExploreController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/explore.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/explore.css" )->addCss( "../public/css/explore.css" )
            ->join( true )->addFilter( new Cssmin() );
    }

    public function readAction() {
        $load = (int) $this->request->get("load");
        $type = (int) $this->request->get("type");
        $nature = (int) $this->request->get("nature");
        $db = DbConnection::getConnection();
        $Pet = new Pet($db);
        $pets = $Pet->readFilterPets($type, $nature);
        if ($pets === 0) {
            $this->response->setStatusCode(500, "Internal Server Error");
        } else {
            if (count($pets) !== 0) {
                $merge = array_merge(...$pets);
                $Moment = new Moment($db);
                $result = $Moment->readPetsList($merge, $load);
                if ($result === 0) {
                    $this->response->setStatusCode(500, "Internal Server Error");
                } else {
                    echo json_encode($result);
                }
            } else {
                echo json_encode([]);
            }
        }
    }

}