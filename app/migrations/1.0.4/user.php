<?php 

use Phalcon\Db\Column;
use Phalcon\Db\Index;
use Phalcon\Db\Reference;
use Phalcon\Mvc\Model\Migration;

/**
 * Class UserMigration_104
 */
class UserMigration_104 extends Migration
{
    /**
     * Define the table structure
     *
     * @return void
     */
    public function morph()
    {
        $this->morphTable('user', [
                'columns' => [
                    new Column(
                        'user_id',
                        [
                            'type' => Column::TYPE_BIGINTEGER,
                            'unsigned' => true,
                            'notNull' => true,
                            'autoIncrement' => true,
                            'size' => 20,
                            'first' => true
                        ]
                    ),
                    new Column(
                        'google_id',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'size' => 25,
                            'after' => 'user_id'
                        ]
                    ),
                    new Column(
                        'facebook_id',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'size' => 25,
                            'after' => 'google_id'
                        ]
                    ),
                    new Column(
                        'user_name',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'notNull' => true,
                            'size' => 10,
                            'after' => 'facebook_id'
                        ]
                    ),
                    new Column(
                        'user_about',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'size' => 30,
                            'after' => 'user_name'
                        ]
                    ),
                    new Column(
                        'user_term',
                        [
                            'type' => Column::TYPE_INTEGER,
                            'unsigned' => true,
                            'notNull' => true,
                            'size' => 1,
                            'after' => 'user_about'
                        ]
                    )
                    ,
                    new Column(
                        'user_type',
                        [
                            'type' => Column::TYPE_CHAR,
                            'size' => 1,
                            'after' => 'user_term'
                        ]
                    )
                ],
                'indexes' => [
                    new Index('PRIMARY', ['user_id'], 'PRIMARY'),
                    new Index('google_id', ['google_id'], 'UNIQUE'),
                    new Index('facebook_id', ['facebook_id'], 'UNIQUE')
                ],
                'options' => [
                    'TABLE_TYPE' => 'BASE TABLE',
                    'AUTO_INCREMENT' => '3',
                    'ENGINE' => 'InnoDB',
                    'TABLE_COLLATION' => 'utf8_general_ci'
                ],
            ]
        );
    }

    /**
     * Run the migrations
     *
     * @return void
     */
    public function up()
    {

    }

    /**
     * Reverse the migrations
     *
     * @return void
     */
    public function down()
    {

    }

}
