<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::latest()->get();

        $recentlyDeletedPost = session()->get('deleted_post');
        if ($recentlyDeletedPost) $posts->prepend($recentlyDeletedPost);

        return Inertia::render('home', compact('posts'));
    }

    public function create()
    {
        return Inertia::render('posts/create');
    }

    public function store(Request $request)
    {
        $fields = $request->validate(
            [
                'title' => ['required'],
                'content' => ['required']
            ]
        );

        $newPost = Post::create($fields);

        return redirect('/')->with(
            'message',
            'Post ' . $newPost->id . ' Created Successfully'
        );
    }

    public function show(Post $post)
    {
        return Inertia::render('posts/show', compact('post'));
    }


    public function edit(Post $post)
    {
        return Inertia::render('posts/edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $fields = $request->validate(
            [
                'title' => ['required'],
                'content' => ['required']
            ]
        );

        $post->update($fields);

        return redirect('/')->with(
            'message',
            'Post ' . $post->id . ' Updated Successfully'
        );
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('/')->with(
            'message',
            'Post ' . $post->id . ' Deleted Successfully'
        );
    }
}
