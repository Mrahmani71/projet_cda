@extends('layout')

@section('content')
<section class="section-books section-padding">
	@foreach($books as $book)
	<div class="card-book">
		<h3 class="card-header">{{$book->label_book}}</h3>
		<h4 class="card-author">Author : <span>{{$book->author_book}}</span></h4>
		<p class="card-prix">Prix : <span>{{$book->prix_book}}</span></p>
		<form class="card-add">Ajouter</form>
	</div>

	@endforeach
</section>
@endsection