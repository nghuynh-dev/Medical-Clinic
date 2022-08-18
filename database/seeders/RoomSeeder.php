<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Room::create(["room_name" => "Room 1"]);
        Room::create(["room_name" => "Room 2"]);
        Room::create(["room_name" => "Room 3"]);
        Room::create(["room_name" => "Room 4"]);
        Room::create(["room_name" => "Room 5"]);
        Room::create(["room_name" => "Room 6"]);
    }
}
