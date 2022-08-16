<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(["name" => "Admin", 'username' => 'admin', "email" => "admin@gmail.com", "password" => bcrypt(12345), "phone" => "0999999999", "admin" => true]);
        User::create(["name" => "Huynh Nguyen", 'username' => 'huynh', "email" => "huynh@gmail.com", "password" => bcrypt(12345), "phone" => "0327514700", "admin" => true]);
        User::create(["name" => "Tai Tran Van", 'username' => 'tai', "email" => "tai@gmail.com", "password" => bcrypt(12345), "phone" => "0327514720", "admin" => false]);
        User::create(["name" => "Loi Nguyen Van", 'username' => 'loi', "email" => "loi@gmail.com", "password" => bcrypt(12345), "phone" => "0327513700", "admin" => false]);
        User::create(["name" => "Hong Nguyen Thi", 'username' => 'hong',"email" => "hong@gmail.com", "password" => bcrypt(12345), "phone" => "0327314700", "admin" => false]);
        User::create(["name" => "Chi Vu Thi Minh", 'username' => 'chi',"email" => "chi@gmail.com", "password" => bcrypt(12345), "phone" => "0327544700", "admin" => false]);
        User::create(["name" => "Loc Nguyen Tan", 'username' => 'loc',"email" => "loc@gmail.com", "password" => bcrypt(12345), "phone" => "0327515700", "admin" => false]);
        User::create(["name" => "Kien Nguyen Trung", 'username' => 'kien',"email" => "kien@gmail.com", "password" => bcrypt(12345), "phone" => "0357514700", "admin" => false]);
    }
}
