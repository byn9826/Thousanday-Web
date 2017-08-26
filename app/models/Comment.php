<?php

class Comment {

    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }

    //* get five comments for one moment from the pin point
    public function readMomentComments( $moment, $pin, $number ) {
        $momentQuery = 'SELECT comment_content, user_id, comment_time 
                        FROM moment_comment WHERE moment_id = :moment
                        ORDER BY comment_id DESC LIMIT :pin, :number';
        $momentStmt = $this->db->prepare( $momentQuery );
        $momentStmt->bindValue( ':moment', $moment, PDO::PARAM_INT );
        $momentStmt->bindValue( ':pin', $pin, PDO::PARAM_INT );
        $momentStmt->bindValue( ':number', $number, PDO::PARAM_INT );
        $momentStmt->execute();
        return $momentStmt->fetchAll( PDO::FETCH_ASSOC );
    }

    //* create new comment
    public function createUserComment( $user, $moment, $content ) {
        $time = date( 'Y-m-d H:i:s' );
        $addQuery = 'INSERT INTO moment_comment ( comment_content, moment_id, user_id, comment_time ) 
                     VALUES ( :content, :moment, :user, :time )';
        $addStmt = $this->db->prepare( $addQuery );
        $addStmt->bindValue( ':content', $content, PDO::PARAM_STR );
        $addStmt->bindValue( ':moment', $moment );
        $addStmt->bindValue( ':user', $user );
        $addStmt->bindValue( ':time', $time );
        $addStmt->execute();
        return $addStmt->rowCount();
    }

    //* get 20 moments id where one user left comments based on load times
    public function readUserComments( $user, $load ) {
        $pin = $load * 20;
        $watchQuery = 'SELECT DISTINCT( moment_id ) FROM moment_comment WHERE user_id = :user 
                       ORDER BY moment_id DESC LIMIT :pin, 20';
        $watchStmt = $this->db->prepare( $watchQuery );
        $watchStmt->bindValue( ':user', $user, PDO::PARAM_INT );
        $watchStmt->bindValue( ':pin', $pin, PDO::PARAM_INT );
        $watchStmt->execute();
        return $watchStmt->fetchAll( PDO::FETCH_NUM );
    }

}