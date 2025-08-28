# Posts Project

A simple project to manage posts.

## Setup

**Merge Database**  
Run your database migrations to merge the latest schema:

php artisan migrate

**Run Seeds**  
Seed the database with initial data:

php artisan db:seed

## Routes

-   `/` - View all posts
-   `/posts/create` - Form to create a new post
-   `/posts/{id}` - View individual post
-   `/posts/{id}/edit` - Form to edit an individual post

## Usage

1. Navigate to `/` to see all posts.
2. Use `/posts/create` to add a new post.
3. Click on any post to view details at `/posts/{id}`.
4. Edit posts via `/posts/{id}/edit`.

## License

[MIT](LICENSE)
