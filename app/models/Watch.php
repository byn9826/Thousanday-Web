<?php

class Watch {

  private $db;

  public function __construct($db) {
    $this->db = $db;
  }

  //read all watcher for one pet
  //index pet_id
  public function readPetWatchs($pet) {
    $watchQuery = 'SELECT user_id FROM pet_watch WHERE pet_id = :pet';
    $watchStmt = $this->db->prepare( $watchQuery );
    $watchStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
    $watchStmt->execute();
    return $watchStmt->fetchAll(PDO::FETCH_ASSOC);
  }

  //return all pets' id on one user's watch list
  //index user_id
  public function readUserWatchs($user) {
    $watchQuery = 'SELECT pet_id FROM pet_watch WHERE user_id = :user';
    $watchStmt = $this->db->prepare($watchQuery);
    $watchStmt->bindValue(':user', $user, PDO::PARAM_INT);
    $watchStmt->execute();
    return $watchStmt->fetchAll(PDO::FETCH_NUM);
  }

  //remove pet from one user's watch list
  //return number of deleted rows
  //index user_id
  public function deleteUserWatch($pet, $user) {
    $delQuery = 'DELETE FROM pet_watch WHERE pet_id = :pet AND user_id = :user';
    $delStmt = $this->db->prepare($delQuery);
    $delStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
    $delStmt->bindValue(':user', $user, PDO::PARAM_INT);
    $delStmt->execute();
    return $delStmt->rowCount();
  }

  //* add pet to one user's watch list
  //* return number of added rows
  public function createUserWatch($pet, $user) {
    $addQuery = 'INSERT INTO pet_watch (pet_id, user_id) VALUES (:pet, :user)';
    $addStmt = $this->db->prepare($addQuery);
    $addStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
    $addStmt->bindValue(':user', $user, PDO::PARAM_INT);
    $addStmt->execute();
    return $addStmt->rowCount();
  }

}