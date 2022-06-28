<x-app-layout>
  <x-slot name="header">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          {{ __('list the books') }}
      </h2>
  </x-slot>
<div class="text-center">
  @if (count($books) > 0)
    @foreach ($books as $book)
    <div class="well">
      <h3><a href="/books/{{$book->id}}">{{$book->label}}</a></h3>
      <p>Author: {{$book->author}}</p>
      <p>Prix: {{$book->prix}}</p>
    </div>
    @endforeach  
    {{$books->links()}}
  @else
      <p>Nothings</p>
  @endif
</div>
</x-app-layout>