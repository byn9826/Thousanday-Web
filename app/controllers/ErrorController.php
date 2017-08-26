<?php
use Phalcon\Assets\Filters\Cssmin;

class ErrorController extends ControllerBase
{
    public function Page403Action() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/error.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/error.css' )
            ->setTargetUri( '/../production/error.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    public function Page404Action() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/error.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/error.css' )
            ->setTargetUri( '/../production/error.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    public function Page500Action() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/error.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/error.css' )
            ->setTargetUri( '/../production/error.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

}