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
  
  //* update pet skill index
  public function updateAction() {
    $data = $this->request->getJsonRawBody(true);
    $token = $data['token'];
    $user = (int) $data['user'];
    $pet = (int) $data['pet'];
    $skill = $data['skill'];
    $index = (int) $data['index'];
    try {
      $db = DbConnection::getConnection();
      $Token = new Token($db);
      $validation = $Token->checkUserToken($user, $token);
      if ($validation !== 1) { 
        return $this->response->setStatusCode(403, 'Forbidden');
      }
      $Pet = new Pet($db);
      $family = $Pet->readPetFamily($pet);
      if (!$family) {
        return $this->response->setStatusCode(404, 'Not Found');
      } else if ($user === (int) $family['owner_id'] || $user === (int) $family['relative_id']) {
        $db->beginTransaction();
        $Pet->updatePetSkill($index, $skill, $pet);
        $db->commit();
        return $this->response->setStatusCode(201, 'Success');
      } else {
        return $this->response->setStatusCode(403, 'Forbidden');
      }
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }
  
}