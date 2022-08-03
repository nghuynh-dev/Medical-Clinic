<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Review::create([
            'name' => "Mrs. Hien",
            'age' => 22,
            'desc' => "I saw Dr. Md. Tien Hossain was able to diagnosis my condition immediately. He and his staff were extremely professional and kind. There was absolutely no wait time. I would highly  looking for a neurologist.",
            'img' => 'https://best-sexy-brides.com/wp-content/uploads/2020/12/27578794_946318675543752_259096191348768768_n-1024x921.jpg'
        ]);
        Review::create([
            'name' => "Mr. Dung",
            'age' => 46,
            'desc' => "I had a great experience with Dr. Hien. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box to see what’s going on.",
            'img' => 'https://file1.dangcongsan.vn/data/0/images/2020/01/22/halthts/dc-luong-thanh-nghi.jpg?dpi=150&quality=100&w=680'
        ]);
        Review::create([
            'name' => "Mr. Tien",
            'age' => 26,
            'desc' => "I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.",
            'img' => 'https://icdn.dantri.com.vn/thumb_w/770/2022/01/31/bon-nguoi-viet-tao-dau-an-quoc-te-nam-quadocx-1643601656657.jpeg'
        ]);
        Review::create([
            'name' => "Mr. Nghia",
            'age' => 30,
            'desc' => "I had a great experience with Dr. Hien. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box to see what’s going on.",
            'img' => 'https://d21xzygesx9h0w.cloudfront.net/TUTOROO-Vietnamese-Tutor-Vancouver-Kane-Duong-166296.jpg'
        ]);
        Review::create([
            'name' => "Mr. Khang",
            'age' => 48,
            'desc' => "I saw Dr. Md. Hoa was able to diagnosis my condition immediately. He and his staff were extremely professional and kind. There was absolutely no wait time. I would highly recommend this practice to anyone looking for a neurologist.",
            'img' => 'https://www.macfound.org/media/fellows/profile_photos/nguyen_2017_profile-240.jpg'
        ]);
        Review::create([
            'name' => "Mr. Ngoc",
            'age' => 33,
            'desc' => "I had a great experience with Dr. Huan. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box. It was entirely stress free.",
            'img' => 'https://nld.mediacdn.vn/2018/3/20/26231394101599939581852451851204585598588728n-1521533032417504830923.jpg'
        ]);
        Review::create([
            'name' => "Mr. Tien",
            'age' => 26,
            'desc' => "I'm very satisfied with the service. I received my test results through their secure website in under 24 hours. It's not cheap, but you definitely get what you paid for. Great service, fast, speedy, professional, and helpful.",
            'img' => 'http://en.ulis.vnu.edu.vn/files/uploads/2019/02/IMG_20180428_022657_456.jpg'

        ]);
    }
}
