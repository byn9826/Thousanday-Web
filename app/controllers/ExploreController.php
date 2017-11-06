<?php
use Phalcon\Assets\Filters\Cssmin;

class ExploreController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection('header')
            ->setTargetPath('../public/production/explore.css' )
            ->addCss('../public/css/globe.css')->addCss('../public/css/general.css')
            ->addCss('../public/css/explore.css')
            ->setTargetUri('/../production/explore.css')
            ->join(true)->addFilter(new Cssmin());
    }

    //* return moments based on filter
    public function readAction() {
        $load = (int) $this->request->get('load');
        $type = (int) $this->request->get('type');
        $nature = (int) $this->request->get('nature');
        try {
            if ($load === 0) {
                $redis = new Predis\Client();
                $key = "data-explore-" . $type . "-" . $nature;
                if ($redis->exists($key)) {
                    return $redis->get($key);
                }
            }
            $db = DbConnection::getConnection();
            $Pet = new Pet($db);
            $pets = $Pet->readFilterPets($type, $nature);
            if (count($pets) !== 0) {
                $merge = array_merge(...$pets);
                $Moment = new Moment($db);
                $result = $Moment->readPetsList($merge, $load);
                $result = json_encode($result);
            } else {
                $result = json_encode([]);
            }
            if ($load === 0) {
                $redis->set($key, $result);
            }
            return $result;
        } catch (Exception $e) {
            return $this->response->setStatusCode(500, 'Internal Server Error');
        }
    }

}