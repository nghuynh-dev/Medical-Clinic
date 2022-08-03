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
        Schema::create('patient', function (Blueprint $table) {
            $table->integer('id',true, true);
            $table->unsignedBigInteger('user_id');
            $table->string('gender');
            $table->string('age');
            $table->string('weight');
            $table->string('problem');
//            $table->foreignId('user_id')->constrained('user');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
};
