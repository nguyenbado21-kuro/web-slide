# 🖼️ Slideshow Hình Ảnh Đẹp

Một ứng dụng slideshow hình ảnh được xây dựng bằng React với thiết kế đẹp mắt và hiệu ứng chuyển động mượt mà.

## ✨ Tính năng

- 🎨 **Thiết kế đẹp mắt**: Giao diện hiện đại với hiệu ứng glass morphism
- 🔄 **Tự động chuyển ảnh**: Slideshow tự động với khả năng tạm dừng/phát
- 🖱️ **Điều khiển thủ công**: Nút prev/next và thumbnail để chuyển ảnh
- 📱 **Responsive**: Tương thích với mọi kích thước màn hình
- ⚡ **Hiệu ứng mượt mà**: Fade in/out và các animation đẹp mắt
- 📊 **Thanh tiến trình**: Hiển thị vị trí hiện tại trong slideshow

## 🚀 Cách chạy

1. **Cài đặt dependencies:**
   ```bash
   cd image-slideshow
   npm install
   ```

2. **Chạy ứng dụng:**
   ```bash
   npm start
   ```

3. **Mở trình duyệt:**
   Truy cập `http://localhost:3000`

## 📁 Cấu trúc thư mục

```
image-slideshow/
├── public/
│   ├── 1.png - 25.png    # Các file ảnh
│   └── index.html
├── src/
│   ├── App.js            # Component chính
│   ├── App.css           # Styles
│   └── index.js
└── README.md
```

## 🎮 Cách sử dụng

- **Tự động phát**: Slideshow sẽ tự động chuyển ảnh mỗi 3 giây
- **Tạm dừng/Phát**: Click nút ⏸️/▶️ ở góc trên bên phải
- **Chuyển ảnh thủ công**: Sử dụng nút ❮ ❯ hoặc click vào thumbnail
- **Xem thông tin**: Số thứ tự ảnh hiển thị ở góc dưới bên phải

## 🛠️ Tùy chỉnh

Để thêm/thay đổi ảnh:
1. Đặt file ảnh vào thư mục `public/`
2. Cập nhật mảng `images` trong `App.js`
3. Đảm bảo tên file theo định dạng số (1.png, 2.png, ...)

## 📱 Responsive Design

- **Desktop**: Hiển thị đầy đủ tính năng
- **Tablet**: Tối ưu layout cho màn hình trung bình
- **Mobile**: Giao diện compact, dễ sử dụng trên điện thoại

## 🎨 Thiết kế

- **Background**: Gradient tím xanh đẹp mắt
- **Glass Effect**: Hiệu ứng kính mờ hiện đại
- **Animations**: Fade, scale, shimmer effects
- **Typography**: Font Segoe UI sang trọng

Enjoy your beautiful slideshow! 🎉