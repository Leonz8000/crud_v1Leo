<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('dashboard' , [ProductController::class, 'index']) ->name('dashboard');
    Route::post('products', [ProductController::class, 'store'])->name('products.store');
    Route::put('products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('products/{product}', [ProductController::class, 'delete'])->name('products.delete');
});

require __DIR__.'/settings.php';
