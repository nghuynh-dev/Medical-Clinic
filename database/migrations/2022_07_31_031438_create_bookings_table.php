<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->integer('gender')->nullable();
            $table->integer('age');
            $table->integer('weight');
            $table->string('problem');
            $table->date('date');
            $table->string('status');
            $table->foreignId('doctor_id')->constrained('doctors');
            $table->foreignId('room_id')->constrained('rooms');
            $table->foreignId('user_id')->constrained('user');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
};
