<?php

class PetController extends ControllerBase {

  //* read information for one pet
  public function readAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $id = $this->request->get('id');
    try {
      $db = DbConnection::getConnection();
      $Pet = new Pet($db);
      $pet = $Pet->readOnePet($id);
      if (!$pet) {
        return $this->response->setStatusCode(404, 'Not Found');
      } 
      $time = date('Y-m-d');
      //add pet ability per day
      if ($pet['last_grow'] !== $time) {
        $db->beginTransaction();
        $code = $Pet->updatePetAbility($id, $time, 'last_grow');
        $db->commit();
        switch ($code) {
          case 0:
              $pet['attack'] += 1;
              break;
          case 1:
              $pet['defend'] += 1;
              break;
          case 2:
              $pet['health'] += 1;
              break;
          case 3:
              $pet['swift'] += 1;
              break;
          case 4:
              $pet['lucky'] += 1;
              break;
        }
      }
      $Moment = new Moment($db);
      $moments = $Moment->readPetMoments($id, 0);
      $Watch = new Watch($db);
      $watchs = $Watch->readPetWatchs($id);
      $User = new User($db);
      if (isset($pet['relative_id'])) {
        //if pet has relative
        $family = $User->readPetFamily($pet['owner_id'], $pet['relative_id']);
        $friends = $Pet->readPetFriends($pet['owner_id'], $pet['relative_id'], $id);
      } else {
        //if pet do not have relative
        $family = $User->readUserName($pet['owner_id']);
        $friends = $Pet->readUserPets($pet['owner_id'], $id);
        $family = [$family];
      }
      return json_encode([$pet, $family, $friends, $moments, $watchs, Skills::$all]);
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

  //* load more pets moments
  public function loadAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')  
      ->sendHeaders();
    $pet = $this->request->get('pet');
    $load = (int) $this->request->get('load');
    $add = (int) $this->request->get('add');
    try {
      $db = DbConnection::getConnection();
      $Moment = new Moment($db);
      $moments = $Moment->readPetMoments($pet, $load, $add);
      return json_encode($moments);
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

  //* user watch or unwatch a pet
  public function watchAction() {
    $this->response
      ->setHeader('Access-Control-Allow-Origin', '*')
      ->setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
      ->setHeader("Content-Type", 'text/plain')
      ->sendHeaders();
    $data = $this->request->getJsonRawBody(true);
    $token = $data['token'];
    $pet = (int) $data['pet'];
    $user = (int) $data['user'];
    $action = (int) $data['action'];
    try {
      $db = DbConnection::getConnection();
      $Token = new Token($db);
      $validation = $Token->checkUserToken($user, $token);
      if ($validation !== 1) { 
        return $this->response->setStatusCode(403, 'Forbidden');
      }
      $Watch = new Watch($db);
      $db->beginTransaction();
      if ($action === 1) {
        //add watch for current pet
        $add = $Watch->createUserWatch($pet, $user);
        if ($add !== 1) {
          $db->rollBack();
          return $this->response->setStatusCode(500, 'Internal Server Error');
        }
      } else {
        //remove watch
        $delete = $Watch->deleteUserWatch($pet, $user);
        if ($delete !== 1) {
          $db->rollBack();
          return $this->response->setStatusCode(500, 'Internal Server Error');
        }
      }
      $db->commit();
      return $this->response->setStatusCode(201, 'Success');
    } catch (Exception $e) {
      return $this->response->setStatusCode(500, 'Internal Server Error');
    }
  }

}