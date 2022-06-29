<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ListingController extends Controller
{
	// Get All listings
	public function index()
	{
		return view('listings.index',  [
			'heading' => "hello dan",
			'listings' => Listing::latest()->filter(request(['tag', 'search']))->paginate(3)
		]);
	}

	// Get single listings 
	public function show(Listing $listing)
	{
		return view('listings.show', [
			'heading' => 'single listing',
			'listing' => $listing
		]);
	}

	// Show create form
	public function create()
	{
		return view('listings.create');
	}

	// Store data
	public function store(Request $request)
	{

		$formFields = $request->validate([
			'title' => 'required',
			'company' => ['required', Rule::unique('listings', 'company')],
			'location' => 'required',
			'website' => 'required',
			'email' => ['required', 'email'],
			'tags' => 'required',
			'description' => 'required',
		]);

		if ($request->hasFile('logo')) {
			$formFields['logo'] = $request->file('logo')->store('logos', 'public');
		}

		Listing::create($formFields);
		return redirect('/')->with('message', 'Listing created successfully');
	}

	// update listing
	public function edit(Listing $listing)
	{
		return view('listings.edit', ['listing' => $listing]);
	}

	// update listing
	public function update(Request $request, Listing $listing)
	{

		$formFields = $request->validate([
			'title' => 'required',
			'company' => ['required'],
			'location' => 'required',
			'website' => 'required',
			'email' => ['required', 'email'],
			'tags' => 'required',
			'description' => 'required',
		]);

		if ($request->hasFile('logo')) {
			$formFields['logo'] = $request->file('logo')->store('logos', 'public');
		}

		$listing->update($formFields);
		return back()->with('message', 'Listing updated successfully');
	}

	// Delete a destroy
	public function destroy(Listing $listing) {
		$listing->delete();
		return redirect('/')->with('message', 'Listing Deleted successfully');

	}
}
