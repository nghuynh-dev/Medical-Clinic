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
        Doctor::create(["name" => "Tung Nguyen Thanh", "img" => "img1", "edu" => "Associate Professor Ph.D", "speciality" => "Dentist", "joined" => "2005-08-12", 'address' => '	106, 30/4 Street, Ninh Kieu District, Can Tho City']);
        Doctor::create(["name" => "Huong Mai Van", "img" => "img2", "edu" => "Bachelor of Medicine", "speciality" => "Surgery", "joined" => "2015-08-12", 'address' => 'Long Son Commune, Vung Tau City, Ba Ria-Vung Tau Province']);
        Doctor::create(["name" => "Tung Phan Dinh", "img" => "img3", "edu" => "Doctor of Medicine", "speciality" => "Oncology", "joined" => "2022-08-12", 'address' => '	3A1, 30/04 Street, Ninh Kieu District, Can Tho City']);
        Doctor::create(["name" => "Huy Ngo Kien", "img" => "img4", "edu" => "Associate Professor Ph.D", "speciality" => "Nuclear medicine", "joined" => "2009-08-19", 'address' => '31 Lang Ha Street Ba Dinh District,Hanoi,Vietnam']);
        Doctor::create(["name" => "Ky Ly Nha", "img" => "img5", "edu" => "Bachelor of Medicine", "speciality" => "Allergy", "joined" => "1999-08-12", 'address' => '193 Nguyen Van Thu Street  Dakao Ward District 1,Ho Chi Minh City,Vietnam']);
        Doctor::create(["name" => "Phuc Ung Hoang", "img" => "img6", "edu" => "Doctor of Medicine", "speciality" => "Cardiology", "joined" => "2022-08-12", 'address' => '43/17 Su Van Hanh Str.[ext.] Ward 12 Dist.10,Ho Chi Minh City,Vietnam']);
        Doctor::create(["name" => "Binh Trinh Thang", "img" => "img7", "edu" => "Associate Professor Ph.D", "speciality" => "Dermatology", "joined" => "2000-07-06", 'address' => '106/1133 Le Duc Tho Ward 13,Gia Lai,Vietnam']);
        Doctor::create(["name" => "Hai Ly", "img" => "img8", "edu" => "Bachelor of Medicine", "speciality" => "Dietetics ", "joined" => "2021-08-19", 'address' => '164 Nam Ky Khoi Nghia St. Ward 6 Dist. 3,Ho Chi Minh City,Vietnam']);
        Doctor::create(["name" => "Vu Nguyen Anh", "img" => "img9", "edu" => "Doctor of Medicine", "speciality" => "Geriatrics", "joined" => "2015-08-19", 'address' => '154 Cong Quynh Street Pham Ngu Lao Ward District 1,Ho Chi Minh City,Vietnam']);
        Doctor::create(["name" => "Khang Nguyen Gia", "img" => "img10", "edu" => "Associate Professor Ph.D", "speciality" => "Neurology", "joined" => "2002-01-12", 'address' => '88 Ho Bieu Chanh St. Ward 11,Ho Chi Minh City,Vietnam']);
    }
}
