<?php

class LearnController extends ControllerBase {
  
  //* read oen pet's skills
  public function readAction() {
    $pet = (int) $this->request->get('pet');
    try {
      $db = DbConnection::getConnection();
      $Pet = new Pet($db);
      $data = $Pet->readPetSkills($pet);
      if (!$data) {
        return $this->response->setStatusCode(404, 'Not Found');
      }
      return json_encode([$data, Skills::$all]);
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }
  
}