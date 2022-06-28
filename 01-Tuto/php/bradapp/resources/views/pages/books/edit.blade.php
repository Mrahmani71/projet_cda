
  <x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit a book') }}
        </h2>
    </x-slot>
<div class="container py-5">
  <div class="row">
    <div class="col-lg-7 mx-auto">
      <div class="bg-white rounded-lg shadow-sm p-5">
        <div class="tab-content">
          <div id="nav-tab-card" class="tab-pane fade show active">
            <h3>Edit un BOOK</h3>
            <!-- Message d'information -->
            @if ($errors->any())
            <div class="alert alert-danger">
              <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
              </ul>
            </div>
            @endif
            <!-- Formulaire -->
            <form method="POST" action="{{ route('books.update', $book->id) }}">
              @csrf
              @method('PATCH')
              <div class="form-group">
                <label>Label</label>
                <input type="text" name="label" class="form-control" value="{{$book->label}}">
              </div>
              <div class="form-group">
                <label>author</label>
                <input type="text" name="author" class="form-control" value="{{$book->author}}">
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label><span class="hidden-xs">Prix</span></label>
                    <div class="input-group">
                      <input type="number" name="prix" class="form-control" value="{{$book->prix}}">
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary  rounded-pill shadow-sm mt-4"> Ajouter un produit </button>
            </form>
            <!-- Fin du formulaire -->
          </div>
        </div>
      </div>
    </div>
  </div>
</x-app-layout>