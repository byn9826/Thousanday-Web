<?php

use Phalcon\Cli\Task;

class MainTask extends Task {
    
  public function mainAction() {
    echo "Test console controller success" . PHP_EOL;
  }
  
  public function nginxAction() {
    shell_exec('cp -rf nginx-default /etc/nginx/sites-available/default');
    shell_exec('sudo systemctl restart nginx');
  }

  public function backupAction() {
    //shell_exec("php app/cli.php main statistic");
    shell_exec("php app/cli.php main sql");
    shell_exec("php app/cli.php main image");
    $date = Date("y-m-d");
    shell_exec("zip -r backup/" . $date . ".zip backup");
    shell_exec("rm -r backup/pet");
    shell_exec("rm -r backup/user");
    shell_exec("rm -r backup/thousanday.sql");
  }
    
  public function sqlAction() {
    $db = $this->config->database;
    shell_exec(
      "mysqldump --user=" . $db->username . " --password=" . $db->password . " " . $db->dbname . " > backup/" . $db->dbname . ".sql"
    );
  }
    
  public function imageAction() {
    shell_exec(
      "cp public/img/pet backup -r"
    );
    shell_exec(
      "cp public/img/user backup -r"
    );
  }
}