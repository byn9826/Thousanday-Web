<?php
use Phalcon\Assets\Filters\Cssmin;

class IndexController extends ControllerBase {

    public function indexAction() {
        $this->assets->collection( 'header' )
            ->setTargetPath( '../public/production/public.css' )
            ->addCss( '../public/css/globe.css' )
            ->addCss( '../public/css/general.css' )
            ->addCss( '../public/css/public.css' )
            ->setTargetUri( '/../production/public.css' )
            ->join( true )->addFilter( new Cssmin() );
    }

    //* init public page, read 20 most recent public moments
    public function readAction() {
        $load = ( int ) $this->request->get( 'load' );
        try {
            $db = DbConnection::getConnection();
            $Moment = new Moment( $db );
            $moments = json_encode( $Moment->readPublicMoments( $load ) );
            return $moments;
        } catch ( Exception $e ) {
            return $this->response->setStatusCode( 500, 'Internal Server Error' );
        }
    }

}

