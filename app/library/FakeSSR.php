<?php

use JonnyW\PhantomJs\Client;

class FakeSSR {
	
	public static function detect($address, $cache_path = null, $expire = false, $phantomjs_path = null) {
		self::render($address, $phantomjs_path, $expire, $cache_path);
	}
	
	private static function render($address, $phantomjs_path, $expire, $cache_path) {
		if ($expire === 0) {
			echo self::crawl($address, $phantomjs_path, $expire, null);
		} else if ($expire !== 0) {
			$file_path = $cache_path . '/__' . str_replace('/', '', $address) . '__.html';
			if (!file_exists($file_path) || !self::check($file_path, $expire)) {
				echo self::crawl($address, $phantomjs_path, $expire, $file_path);
			} else {
				echo file_get_contents($file_path);
			}
		}
	}
	
	public static function check($file_path, $expire) {
		if (!$expire) {
			return true;
		}
		return time() < filemtime($file_path) + $expire * 60;
	}
	
	public static function crawl($address, $phantomjs_path, $expire, $file_path) {
		$client = Client::getInstance();
		if ($phantomjs_path !== null) {
			$client->getEngine()->setPath($phantomjs_path);
		}
    $client->isLazy();
    $request = $client->getMessageFactory()->createRequest();
    $request->setTimeout(3000);
    $response = $client->getMessageFactory()->createResponse();
    $request->setMethod('GET');
    $request->setUrl($address);
    $client->send($request, $response);
    if($response->getStatus() === 200) {
      $content = '<!DOCTYPE html><html>' . $response->getContent() . '</html>';
			$content = preg_replace('~<script(.*?)</script>~Usi', '', $content);
			if ($expire !== 0) {
				file_put_contents($file_path, $content);
			}
			return $content;
    }
	}
	
}