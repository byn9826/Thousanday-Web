<?php

class Comment {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //get five comments for one moment from the pin point
    public function readMomentComments($moment, $pin, $number) {
        $momentQuery = 'SELECT comment_content, user_id, comment_time 
                        FROM moment_comment WHERE moment_id = :moment
                        ORDER BY comment_id DESC LIMIT :pin, :number';
        try {
            $momentStmt = $this->db->prepare($momentQuery);
            $momentStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
            $momentStmt->bindValue(':pin', $pin, PDO::PARAM_INT);
            $momentStmt->bindValue(':number', $number, PDO::PARAM_INT);
            $momentStmt->execute();
            return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //create new comment
    public function createUserComment($user, $moment, $content) {
        $time = date('Y-m-d H:i:s');
        $addQuery = 'INSERT INTO moment_comment (comment_content, moment_id, user_id, comment_time) 
                     VALUES (:content, :moment, :user, :time)';
        try {
            $addStmt = $this->db->prepare($addQuery);
            $addStmt->bindValue(':content', $content, PDO::PARAM_STR);
            $addStmt->bindValue(':moment', $moment);
            $addStmt->bindValue(':user', $user);
            $addStmt->bindValue(':time', $time);
            $this->db->beginTransaction();
            $addStmt->execute();
            $this->db->commit();
            return 1;
        } catch (PDOException $e) {
            print $e->getMessage();
            $this->db->rollback();
            return 0;
        }
    }

    //get 20 moments id where user comments
    public function readUserComments($user, $load) {
        $pin = $load * 20;
        $watchQuery = 'SELECT DISTINCT(moment_id) FROM moment_comment WHERE user_id = :user 
                       ORDER BY moment_id DESC LIMIT :pin, 20';
        try {
            $watchStmt = $this->db->prepare($watchQuery);
            $watchStmt->bindValue(':user', $user, PDO::PARAM_INT);
            $watchStmt->bindValue(':pin', $pin, PDO::PARAM_INT);
            $watchStmt->execute();
            return $watchStmt->fetchAll(PDO::FETCH_NUM);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

}