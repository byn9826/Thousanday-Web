<?php

class Monsters {
    
    public static $pig = [
        'id' => 1,
        'name' => 'Pig',
        'attack' => '80',
        'defend' => '65',
        'health' => '77',
        'swift' => '21',
        'lucky' => '23',
        'skill0' => 6,
        'skill1' => 1,
        'skill2' => 8,
        'skill3' => 5,
    ];
    
    public static function getZodiac() {
        return [
            self::$pig
        ];
    }
}