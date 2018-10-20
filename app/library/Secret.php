<?php

class Secret {

    private $facebook = 'c1d44a536274ef20df2889492331bed1';

    //get facebook secret
    public function getFacebook() {
        return $this->facebook;
    }

    //generate new token for user login
    public function getToken($id) {
        $date = date('Y-m-d H:i:s');
        $string = sha1("3*jq1|dq1)6(&") . md5($date . "xshssbyyangsjy711234" . $id);
        return hash('sha512', $string);
    }

}