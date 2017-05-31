<?php

class ExploreController extends ControllerBase
{

    public function indexAction() {

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