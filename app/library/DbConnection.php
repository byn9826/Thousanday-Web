<?php

class DbConnection {
    private static $_dsn = 'mysql:host=localhost:3306;dbname=c9';
    private static $_username = 'root';
    private static $_password = '';
    private static $_objConnection;

    public static function getConnection () {
        if (!isset(self::$_objConnection)) {
            try {
                self::$_objConnection = new PDO(self::$_dsn, self::$_username, self::$_password);
                self::$_objConnection->setAttribute(PDO::FETCH_ASSOC, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                echo 'Connection failed: ' . $e->getMessage();
                exit();
            }
        }
        return self::$_objConnection;
    }
}