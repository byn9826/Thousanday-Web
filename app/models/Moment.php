<?php

class Moment {

  private $db;

  public function __construct($db) {
    $this->db = $db;
  }

  //read 20 public moments start from the pin point, return moment list;
  //index moment_id
  public function readPublicMoments($load) {
    $momentQuery = 'SELECT moment_id, pet_id, image_name, moment_message 
                    FROM moment WHERE display = 1 ORDER BY moment_id DESC LIMIT :pin, 20';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->bindValue(':pin', $load * 20, PDO::PARAM_INT);
    $momentStmt->execute();
    return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
  }

  //read one moment
  //index moment_id
  public function readOneMoment($id) {
    $momentQuery = 'SELECT * FROM moment WHERE moment_id = :id AND display = 1';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->bindValue(':id', $id, PDO::PARAM_INT);
    $momentStmt->execute();
    return $momentStmt->fetch(PDO::FETCH_ASSOC);
  }

  //read 20 moments for one pet
  //index pet_id
  public function readPetMoments($id, $load, $add = 0) {
    $momentQuery = 'SELECT moment_id, pet_id, image_name, moment_message 
                    FROM moment WHERE pet_id = :id AND display = 1 
                    ORDER BY moment_id DESC LIMIT :pin, 20';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->bindValue(':id', $id, PDO::PARAM_INT);
    $momentStmt->bindValue(':pin', $load * 20 + $add, PDO::PARAM_INT);
    $momentStmt->execute();
    return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
  }
  
  //return 20 moments from given pets' id list and load records
  //index pet_id
  public function readPetsList($list, $load) {
    $values = implode(',', $list);
    $pin = $load * 20;
    $momentQuery = 'SELECT moment_id, pet_id, image_name, moment_message FROM moment 
                    FORCE INDEX (pet_id) WHERE pet_id IN (' . $values . ') AND display = 1 
                    ORDER BY moment_id DESC LIMIT ' . $pin . ', 20';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->execute();
    return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
  }

  //return moments data from given moments' id list
  //index moment_id
  public function readMomentsList($moment) {
    $values = implode(',', $moment);
    $momentQuery = 'SELECT moment_id, pet_id, image_name, moment_message FROM moment 
                    WHERE moment_id IN (' . $values . ') AND display = 1';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->execute();
    return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
  }
  
  //hide one moment as delete from public
  //index moment_id
  public function hideOneMoment($moment, $pet) {
    $momentQuery = 'UPDATE moment SET display = 0 WHERE moment_id = :moment AND pet_id = :pet';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
    $momentStmt->bindValue(':pet', $pet, PDO::PARAM_INT);
    $momentStmt->execute();
    return $momentStmt->rowCount();
  }

  //add one new moment
  //return new moment id
  public function createNewMoment($image, $message, $pet) {
    $time = date('Y-m-d H:i:s');
    $momentQuery = 'INSERT INTO moment (image_name, moment_message, pet_id, moment_date, display) 
                   VALUES (:image, :message, :pet, :time, 1)';
    $momentStmt = $this->db->prepare($momentQuery);
    $momentStmt->bindValue(':image', $image, PDO::PARAM_STR);
    $momentStmt->bindValue(':message', $message);
    $momentStmt->bindValue(':pet', $pet);
    $momentStmt->bindValue(':time', $time);
    $momentStmt->execute();
    return $this->db->lastInsertId();
  }

}