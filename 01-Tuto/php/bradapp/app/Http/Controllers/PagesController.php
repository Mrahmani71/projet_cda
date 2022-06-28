<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index() {
        return view('pages.index');
    }

    public function about() {
        $title = "welcome To about";
        // return view('pages.about', compact('title'));
        return view('pages.about')->with('title', $title);
    }

    public function services() {
        $data = array (
            'title' => "Services",
            'services' => ['UI', "UX", "Sleep"]
        );
            
        return view('pages.services')->with($data);
    }
}
