<?php

use Phalcon\Cli\Task;

class MainTask extends Task {
    
    public function mainAction() {
        echo "Test console controller success" . PHP_EOL;
    }
    
    public function reportAction() {
        $path = "statistic/weekly_report.txt";
        try {
            $db = DbConnection::getConnection();
            $Pet = new Pet($db);
            $pets = $Pet->countPetsNumber()['count'];
            $User = new User($db);
            $users = $User->countUsersNumber()['count'];
            $Moment = new Moment($db);
            $moments = $Moment->countMomentsNumber()['count'];
            $report = date('Y-m-d') . "\n";
            $report .= "Users Number: " . $users . "\n";
            $report .= "Pets Number: " . $pets . "\n";
            $report .= "Moments Number: " . $moments . "\n";
            $report .= "\n";
            file_put_contents($path, $report, FILE_APPEND);
        } catch (Exception $e) {
            var_dump($e);
        }
    }
    
}