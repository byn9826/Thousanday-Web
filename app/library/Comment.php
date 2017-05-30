<?php

class Comment {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //get five comments for one moment from the pin point
    public function readMomentComments($moment, $pin) {
        $momentQuery = 'SELECT * FROM moment_comment WHERE moment_id = :moment
                        ORDER BY comment_id DESC LIMIT :pin, 5';
        try {
            $momentStmt = $this->db->prepare($momentQuery);
            $momentStmt->bindValue(':moment', $moment, PDO::PARAM_INT);
            $momentStmt->bindValue(':pin', $pin, PDO::PARAM_INT);
            $momentStmt->execute();
            return $momentStmt->fetchAll(PDO::FETCH_ASSOC);
        }  catch (PDOException $e) {
            print $e->getMessage();
            return 0;
        }
    }

    //create new comment
    public function createUserComment($user, $moment, $content) {
        $time = strftime("%Y-%m-%d", $date);
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
}