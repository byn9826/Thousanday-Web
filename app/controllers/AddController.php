<?php
use Phalcon\Assets\Filters\Cssmin;

class AddController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/add.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/add.css" )->addCss( "../public/css/add.css" )
            ->join( true )->addFilter( new Cssmin() );
    }

}