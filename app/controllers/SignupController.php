<?php
use Phalcon\Assets\Filters\Cssmin;

class SignupController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/signup.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/signup.css' )
            ->setTargetUri( '/../production/signup.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

}