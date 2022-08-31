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
        User::create(["patient_name" => "Admin", 'username' => 'admin', "email" => "admin@gmail.com", "password" => bcrypt(123456), "phone" => "84054669999", "admin" => true, 'created_at' => "2022-08-12", 'updated_at' => '2022-08-12']);
        User::create(["patient_name" => "Huynh Nguyen", 'username' => 'huynhnguyen', "email" => "huynh@gmail.com", "password" => bcrypt(123456), "phone" => "84058265881", "admin" => false, 'created_at' => "2022-08-13", 'updated_at' => '2022-08-13']);
        User::create(["patient_name" => "Tai Tran Van", 'username' => 'taitran', "email" => "tai@gmail.com", "password" => bcrypt(123456), "phone" => "84396626211", "admin" => false, 'created_at' => "2022-08-14", 'updated_at' => '2022-08-14']);
        User::create(["patient_name" => "Loi Nguyen Van", 'username' => 'loinguyen', "email" => "loi@gmail.com", "password" => bcrypt(123456), "phone" => "84759848453", "admin" => false, 'created_at' => "2022-08-15", 'updated_at' => '2022-08-15']);
        User::create(["patient_name" => "Hong Nguyen Thi", 'username' => 'hongnguyen',"email" => "hong@gmail.com", "password" => bcrypt(123456), "phone" => "84635461040", "admin" => false, 'created_at' => "2022-08-16", 'updated_at' => '2022-08-16']);
        User::create(["patient_name" => "Yen Nguyen Hoang", 'username' => 'yennguyen',"email" => "yen@gmail.com", "password" => bcrypt(123456), "phone" => "84541204825", "admin" => false, 'created_at' => "2022-08-17", 'updated_at' => '2022-08-17']);
        User::create(["patient_name" => "Hoang Nguyen Tan", 'username' => 'hoangnguyen',"email" => "hoang@gmail.com", "password" => bcrypt(123456), "phone" => "84025019865", "admin" => false, 'created_at' => "2022-08-18", 'updated_at' => '2022-08-18']);
        User::create(["patient_name" => "Tuyen Nguyen Trong", 'username' => 'tuyennguyen',"email" => "tuyen@gmail.com", "password" => bcrypt(123456), "phone" => "84515062277", "admin" => false, 'created_at' => "2022-08-19", 'updated_at' => '2022-08-19']);
        User::create(["patient_name" => "Test Nguyen", 'username' => 'test',"email" => "test@gmail.com", "password" => bcrypt(123456), "phone" => "84515062277", "admin" => false, 'created_at' => "2022-08-20", 'updated_at' => '2022-08-20']);

    }
}
