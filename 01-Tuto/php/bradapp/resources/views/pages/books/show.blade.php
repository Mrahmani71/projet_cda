<x-app-layout>
  <x-slot name="header">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          {{ __('Show the book') }}
      </h2>
  </x-slot>
<div class="text-center">
  @if ($book->label)
   <a href="/books" class="btn btn-primary">Go back</a>
    <div class="well mt-4">
      <h3>{{$book->label}}</h3>
      <p>Author: {{$book->author}}</p>
      <p>Prix: {{$book->prix}}</p>
      <hr>
      <a href="/books/{{$book->id}}/edit" class="btn btn-primary">Edit</a>

      <form method="Post" action="{{ route('books.destroy', $book->id)}}">
        @csrf
        @method('DELETE')
        <button class="btn btn-danger" type="submit">Supprimer</button>
      </form>
    </div>
  @else
      <p>Nothings</p>
  @endif

</div>
</x-app-layout>
