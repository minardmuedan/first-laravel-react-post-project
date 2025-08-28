# Posts Project

A simple project to manage posts.

## Setup

1. **Install Packages**  
   Install PHP and Composer dependencies:

    ```bash
    composer install
    ```

    If using Node packages (e.g., for frontend):

    ```bash
    npm install
    ```

2. **Merge Database**  
   Run your database migrations to merge the latest schema:

    ```bash
    php artisan migrate
    ```

3. **Run Seeds**  
   Seed the database with initial data:

    ```bash
    php artisan db:seed
    ```

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
