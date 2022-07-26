<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'patient_name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'username' => $this->faker->userName(),

            'password' => bcrypt('123456'),
            'dob' => $this->faker->date('Y-m-d', "-18 years"),
            'role' => rand(0, 1)
        ];
    }
}
