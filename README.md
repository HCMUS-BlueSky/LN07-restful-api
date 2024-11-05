# Step 1

- Server A: Bỏ @UseGuards(AuthGuard) ở actor và film controller
- Server B: Hide code trong FilmModule
- Set up rồi

# Step 2

- Mở @UseGuards(AuthGuard) ở actor và films controller
- Giới thiệu về authController (flow login)
- Login -> Access token -> Bearer header -> Authentication

# Step 3

- Server B: Mở code trong FilmModule
- Trong film service bỏ headers

# Step 4

- Thêm header vào film service

# Step 5

- Login như bình thường, chờ cho token expired 1 phút
- Dùng api /auth/refresh để lấy token mới
- Login như bình thường
