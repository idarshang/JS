## Blogging Application

### requirements

- user authentication
  - registration
  - login
  - forgot password
  - reset password
  - user blocking
- blogs
  - authenticated user
    - blog actions
      - add blog
      - edit blog
      - delete blog
      - make a blog public / private
      - like/dislike a blog
    - comment actions
      - add a comment
      - edit a comment
      - delete a comment
    - rating actions
      - add a rating
      - edit a rating
      - delete a rating
  - general user blog actions
    - search blogs
      - by tags
      - by user
      - by date
      - by popularity
    - share a blog

### database

- db name: blogs_db
- tables
  - user
  - blog
  - attachments
  - comments
  - rating
  - likes

### backend

- user apis
  - POST /signup
  - POST /signin
  - POST /forgot-password
  - POST /reset-password
  - POST /list
  - POST /:userId/toggle-activation
  - GET /profile/:userId
  - PUT /profile/:userId
  - DELETE /user/:userId
- blog apis
  - POST /create
  - PUT /:blogId
  - PATCH /:blogId/state
  - PATCH /:blogId/toggle-like
  - DELETE /:blogId
  - GET /all
  - GET /search?category=<>&tag=<>...
  - GET /:blogId/comment
  - GET /:blogId/rating
  - GET /:blogId/like-count
- comment apis
  - POST /comment
  - PUT /:commentId
  - DELETE /:commentId
- rating apis
  - POST /rating
  - DELETE /:ratingId

### frontend

#### user portal

#### admin panel
