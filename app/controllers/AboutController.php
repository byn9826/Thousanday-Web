<?php
use Phalcon\Assets\Filters\Cssmin;

class AboutController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( "header" )->setTargetPath( "../public/production/about.css" )
            ->addCss( "../public/css/globe.css" )->addCss( "../public/css/general.css" )
            ->setTargetUri( "/../production/about.css" )->addCss( "../public/css/about.css" )
            ->join( true )->addFilter( new Cssmin() );
    }

}