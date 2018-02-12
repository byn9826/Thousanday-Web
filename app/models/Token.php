<?php

class Token {

  private $db;

  public function __construct($db) {
    $this->db = $db;
  }
  
  //verify user's token
  //return 1 for valid, return 2 for invalid
  //index user_id
  public function checkUserToken($id, $token) {
    $checkQuery = 'SELECT user_token FROM user_token WHERE user_id = :id AND user_token = :token';
    $checkStmt = $this->db->prepare($checkQuery);
    $checkStmt->bindValue(':id', $id, PDO::PARAM_INT);
    $checkStmt->bindValue(':token', $token, PDO::PARAM_STR);
    $checkStmt->execute();
    $result = $checkStmt->fetch(PDO::FETCH_ASSOC);
    return empty($result) ? 2 : 1;
  }

  //remove user token
  //index user_id
  public function deleteUserToken($id, $token) {
    $delQuery = 'DELETE FROM user_token WHERE user_id = :id AND user_token = :token';
    $delStmt = $this->db->prepare($delQuery);
    $delStmt->bindValue(':id', $id, PDO::PARAM_INT);
    $delStmt->bindValue(':token', $token, PDO::PARAM_STR);
    $delStmt->execute();
    return $delStmt->rowCount();
  }

  //create token for logged in users
  public function createUserToken($id, $token, $keep) {
    $addQuery = 'INSERT INTO user_token (user_id, user_token, keep) 
                 VALUES (:id, :token, :keep) 
                 ON DUPLICATE KEY UPDATE user_token = :token';
    $addStmt = $this->db->prepare($addQuery);
    $addStmt->bindValue(':id', $id);
    $addStmt->bindValue(':token', $token, PDO::PARAM_STR);
    $addStmt->bindValue(':keep', $keep);
    $addStmt->execute();
    return $addStmt->rowCount();
  }
  
}