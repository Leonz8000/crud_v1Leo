<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;    
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dashboard', [
            'products' => Product::query()->latest()->get()
        ] 
        ) ;
    }

    /**
     * Show the form for creating a new resource.
     */
   // public function create()
    // {
        //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required','string','max:100'],
            'description' => ['nullable','string'],
            'price' => ['required','numeric','min:0'],
        ]);
        Product::create($data);

        return redirect()->route('dashboard'); 
        
    }

    /**
     * Display the specified resource.
     */
    // public function show(Product $product)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Product $product)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
         $data = $request->validate([
            'name' => ['required','string','max:100'],
            'description' => ['nullable','string'],
            'price' => ['required','numeric','min:0'],
        ]);
        $product ->update($data);
        return redirect() ->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete(Product $product)
    {
        $product->delete('name','description','price');
        return redirect()->route('dashboard');

    }
}
