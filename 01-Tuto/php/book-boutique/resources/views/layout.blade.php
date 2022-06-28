<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>BOOKTIQUE</title>

  <!-- Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

</head>

<body>
  <header>
    <nav class="navbar container">
      <div class="brand"><a href="/">Booktique</a></div>

      <ul class="links">
        <li class="item"><a>Connexion</a></li>
        <li class="item"><a>Inscription</a></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    @yield('content')
  </div>
</body>

</html>