<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = ['label', 'author', 'prix', 'user_id'];
    public $primaryKey = 'id';
    public $timesramps = true;

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
