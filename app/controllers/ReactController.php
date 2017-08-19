<?php
use Phalcon\Assets\Filters\Cssmin;

class ReactController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/react.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/react.css" )->addCss( "../public/css/react.css" )
            ->join( true )->addFilter( new Cssmin() );
    }

}