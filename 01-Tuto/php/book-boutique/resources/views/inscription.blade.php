@extends('layout')

@section('content')
<section class="section-books section-padding">
  <form method="POST" action="{{ route('users.store') }}">
    @csrf
    <label for="username">
      Username: <input id="username" type="text" name="username">
    </label>

    <label for="email">
      Email: <input id="email" type="email" name="email">
    </label>

    <label for="password">
      Password: <input id="password" type="password" name="password">
    </label>

    <label for="confirmPassword">
      Confirm Password: <input id="confirmPassword" type="password" name="confirmPassword">
    </label>

    <button type="submit">Inscription</button>
  </form>
</section>
@endsection