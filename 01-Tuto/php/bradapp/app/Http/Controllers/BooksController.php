<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\DB;
class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //**** GET All
        // $books = Book::all();

        //**** GET by Order
        //$books = Book::orderBy('label', 'asc')->get();

        //**** GET By order and limit
        // $books = Book::orderBy('label', 'asc')->take(2)->get();

        //**** GET By paginate
        $books = Book::orderBy('created_at', 'desc')->paginate(2);


        //**** GET By Query selector
        // $books = DB::select('select * from books');

        return view('pages.books.index')->with('books', $books);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.books.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'label' => 'required',
            'author' => 'required',
            'prix' => 'required',
        ]);

        Book::create([
            'label' => $request->label,
            'author' => $request->author,
            'prix' => $request->prix,
            'user_id' => auth()->user()->id,
         ]);

         return redirect()->route('books.index')
         ->with('success', 'Book a ajouté avec succès !');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $book = Book::findOrFail($id);
       return view('pages.books.show')->with('book', $book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $book = Book::findOrFail($id);
        return view('pages.books.edit')->with('book', $book);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateBook = $request->validate([
            'label' => 'required',
            'author' => 'required',
            'prix' => 'required',
        ]);

        Book::whereId($id)->update($updateBook);
        return redirect()->route('books.index')
            ->with('success', 'Book a Modifier avec succès !');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return redirect('/books')->with('success', 'Book supprimé avec succès');
    }
}
