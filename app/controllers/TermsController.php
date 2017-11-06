<?php
use Phalcon\Assets\Filters\Cssmin;

class TermsController extends ControllerBase {

    public function IndexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/terms.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/terms.css' )
            ->setTargetUri( '/../production/terms.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

}