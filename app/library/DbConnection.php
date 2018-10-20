<?php

class DbConnection {
  public static $_username = 'root';
  public static $_password = '123';
  public static $_dbname = 'thousanday';
  private static $_dsn = 'mysql:host=127.0.0.1;dbname=thousanday';
  private static $_objConnection;

  public static function getConnection() {
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