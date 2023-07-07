# Library API

This is a backend API for an online library management platform. The API
provides features to manage users and books. Users can register themselves into
the library system, view books, issue books for themselves, and return books.
All the basic functionalities of a library system have been provided.

## Routes


### User

1. /api/v1/users/register (POST) - Register new users into the system

{ "name": "{{name}}", "email": "{{email}}", "password": "{{password}}",
"confirmPassword":"{{password}}", "gender": "{{gender}}" }

2. /api/v1/users/me (GET) - Get current user information
3. /api/v1/users/<user_id> (GET) - Get a specific user information (for admins
   only)
4. /api/v1/users/logout (GET) - Log out
5. /api/v1/users/login (POST) - Log in with email and password

{ "email": "{{email}}", "password": "{{password}}" }

6. /api/v1/users/forgotPassword (POST) - To reset password

{ "email": "{{email}}" }

7. /api/v1/users/resetPassword/<reset_token> (Information sent through mail) -
   Reset password

{ "password": "{{password}}", "confirmPassword": "{{password}}" }

8. /api/v1/users/updateMe (PATCH) - Update user profile

(FORM-DATA) email: {{email}} photo: {{photo file}}

9. /api/v1/users/updatePassword (PATCH) - Update user password

{ "password": "{{password}}", "newPassword": "super-strong-password",
"confirmNewPassword": "super-strong-password" }

10. /api/v1/users/deleteMe (DELETE) - Delete user account
11. /api/v1/users (GET) - See all user information (for admins only)

### Books

1. /api/v1/books (GET) - See all book information
2. /api/v1/books/<book_id> (GET) - See specific book information
3. /api/v1/books (POST) - Add new books to the library (For admins only)

{ "name": "{{name}}", "author": "{{author}}", "genre": ["{{genre1}}",
"{{genre2}}", "{{genre3}}", ...], "ISBN": "{{ISBN}}", "rating": {{rating}} }

4. /api/v1/books/<book_id> (PATCH) - Update book information (For admins only)

{ "author": "{{New author name}}", "rating": {{new_rating}} }

5. /api/v1/books/<book_id> (DELETE) - Delete book (For admins only)
6. /api/v1/books/issue/<book_id> (GET) - Issue book
7. /api/v1/books/return/<book_id> (GET) - Return book
