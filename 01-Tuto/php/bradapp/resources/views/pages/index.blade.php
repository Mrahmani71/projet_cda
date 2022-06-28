@extends('layouts.app')

@section('content')
<div class="p-5 mt-4 mb-4 bg-light rounded-3">
  <div class="container-fluid py-5">
    <h1 class="display-5 fw-bold">Book Shop</h1>
    <p class="col-md-8 fs-4">Welcome To Booktique</p>

    <p>
      <a role="button" class="btn btn-primary btn-lg" href="/signin">Login</a>
  
      <a role="button" class="btn btn-success btn-lg" href="/signup">Register</a>
    </p>
  </div>
</div>
@endsection