<?php

class Like {

  private $db;

  public function __construct($db) {
    $this->db = $db;
  }

  //delete like from one user to one moment
  //index moment_id, user_id
  public function deleteUserLike($moment, $user) {
    $delQuery = 'DELETE FROM moment_like WHERE moment_id = :moment AND user_id = :user';
    $delStmt = $this->db->prepare($delQuery);
    $delStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
    $delStmt->bindValue(':user', $user, PDO::PARAM_INT);
    $delStmt->execute();
    return $delStmt->rowCount();
  }
  

  //get all user id like one moment
  //index moment_id
  public function readMomentLikes($id) {
      $momentQuery = 'SELECT user_id FROM moment_like WHERE moment_id = :id';
      $momentStmt = $this->db->prepare($momentQuery);
      $momentStmt->bindValue(':id', $id, PDO::PARAM_INT);
      $momentStmt->execute();
      return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
  }

  //get 20 moments id list for one user
  //index moment_id, user_id
  public function readUserLikes($user, $load) {
      $pin = $load * 20;
      $watchQuery = 'SELECT moment_id FROM moment_like WHERE user_id = :user 
                     ORDER BY moment_id DESC LIMIT :pin, 20';
      $watchStmt = $this->db->prepare($watchQuery);
      $watchStmt->bindValue(':user', $user, PDO::PARAM_INT);
      $watchStmt->bindValue(':pin', $pin, PDO::PARAM_INT);
      $watchStmt->execute();
      return $watchStmt->fetchAll(PDO::FETCH_NUM);
  }
  
  //create like from one user to one moment
  public function createUserLike($moment, $user) {
    $addQuery = 'INSERT INTO moment_like (moment_id, user_id) VALUES (:moment, :user)';
    $addStmt = $this->db->prepare($addQuery);
    $addStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
    $addStmt->bindValue(':user', $user, PDO::PARAM_INT);
    $addStmt->execute();
    return $addStmt->rowCount();
  }

}