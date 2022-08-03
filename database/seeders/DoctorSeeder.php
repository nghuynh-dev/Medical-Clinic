<?php

namespace Database\Seeders;

use App\Models\Doctor;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Doctor::create(["name" => "Tung Nguyen Thanh", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_BS-nguyen-cong-duy-C%C4%90HA.jpg", "edu" => "Associate Professor Ph.D", "speciality" => "Dentist"]);
        Doctor::create(["name" => "Huong Mai Van", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20191207/20191207_bs%20H%C6%B0%C6%A1ng%20C%C4%90HA%202.jpg", "edu" => "Bachelor of Medicine", "speciality" => "Surgery"]);
        Doctor::create(["name" => "Tung Phan Dinh", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20190924/20190924_bac%20si_3.png", "edu" => "Doctor of Medicine", "speciality" => "Oncology"]);
        Doctor::create(["name" => "Huy Ngo Kien", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_TK-BS-bui-van-hai-CK-noi.jpg", "edu" => "Associate Professor Ph.D", "speciality" => "Nuclear medicine"]);
        Doctor::create(["name" => "Ky Ly Nha", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20210319/20210319_BS%20Len.png", "edu" => "Bachelor of Medicine", "speciality" => "Allergy"]);
        Doctor::create(["name" => "Phuc Ung Hoang", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20220418/20220418_ANHPROFILE-01.png", "edu" => "Doctor of Medicine", "speciality" => "Cardiology"]);
        Doctor::create(["name" => "Binh Trinh Thang", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20210406/20210406_BS_Th%C6%B0%E1%BB%9Fng.png", "edu" => "Associate Professor Ph.D", "speciality" => "Dermatology"]);
        Doctor::create(["name" => "Hai Ly", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20211027/20211027_ThayPhuong.png", "edu" => "Bachelor of Medicine", "speciality" => "Dietetics "]);
        Doctor::create(["name" => "Vu Nguyen Anh", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_Ths-Bs-hoang-thi-thuy-CK-noi.jpg", "edu" => "Doctor of Medicine", "speciality" => "Geriatrics"]);
        Doctor::create(["name" => "Khang Nguyen Gia", "img" => "https://img.medlatec.vn/ImagePath/imagesDoctor/20190909/20190909_ThS-bs-do-duc-linh-ck-cdha.jpg", "edu" => "Associate Professor Ph.D", "speciality" => "Neurology"]);
    }
}
