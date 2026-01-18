# 🦊 Hướng Dẫn Kết Nối MetaMask

## 📋 Mục Lục
1. [Cài Đặt MetaMask](#cài-đặt-metamask)
2. [Cấu Hình Mạng Hardhat](#cấu-hình-mạng-hardhat)
3. [Import Tài Khoản Test](#import-tài-khoản-test)
4. [Kết Nối Với Ứng Dụng](#kết-nối-với-ứng-dụng)
5. [Đăng Nhập Bằng MetaMask](#đăng-nhập-bằng-metamask)

---

## 🔧 Cài Đặt MetaMask

### Bước 1: Tải MetaMask
1. Truy cập: https://metamask.io/download/
2. Chọn trình duyệt của bạn (Chrome, Firefox, Edge, Brave)
3. Nhấn "Install MetaMask for [Browser]"
4. Thêm extension vào trình duyệt

### Bước 2: Khởi Tạo Ví
1. Mở MetaMask extension
2. Chọn "Get Started"
3. Chọn "Create a Wallet" hoặc "Import Wallet"
4. Tạo mật khẩu mạnh
5. **LƯU GIỮ** cụm từ khôi phục (Recovery Phrase) an toàn

---

## ⚙️ Cấu Hình Mạng Hardhat

### Tự Động (Khuyến Nghị)
Ứng dụng sẽ **tự động** yêu cầu chuyển mạng khi bạn kết nối lần đầu!

### Thủ Công
Nếu cần thêm mạng thủ công:

1. Mở MetaMask
2. Nhấn vào biểu tượng mạng (góc trên bên trái)
3. Chọn "Add Network" → "Add a network manually"
4. Điền thông tin:

```
Network Name: Hardhat Local
RPC URL: http://127.0.0.1:8545
Chain ID: 31337
Currency Symbol: ETH
```

5. Nhấn "Save"

---

## 💰 Import Tài Khoản Test

Hardhat cung cấp 20 tài khoản test với mỗi tài khoản có **10,000 ETH**.

### Account #0 - Admin (Khuyến Nghị)
```
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
```

### Account #1 - Student 1
```
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
Address: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
```

### Account #2 - Student 2
```
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
Address: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
```

### Cách Import:
1. Mở MetaMask
2. Nhấn vào icon tài khoản → "Import Account"
3. Chọn "Private Key"
4. Dán Private Key từ danh sách trên
5. Nhấn "Import"

---

## 🔗 Kết Nối Với Ứng Dụng

### Trên Trang Chính (index.html)

1. **Khởi động Backend và Blockchain**
   ```bash
   # Terminal 1: Start Hardhat
   npx hardhat node
   
   # Terminal 2: Deploy contract
   npx hardhat run scripts/deploy.js --network localhost
   
   # Terminal 3: Start Backend
   cd backend
   npm start
   ```

2. **Mở Ứng Dụng**
   - Truy cập: `http://127.0.0.1:5500/Frontend/index.html`
   - Hoặc mở file `Frontend/index.html` bằng Live Server

3. **Kết Nối MetaMask**
   - Nhấn nút **"🦊 Kết nối MetaMask"**
   - MetaMask sẽ hiện popup
   - Chọn tài khoản muốn kết nối
   - Nhấn **"Connect"**
   - Ứng dụng sẽ tự động chuyển mạng nếu cần

4. **Kiểm Tra Kết Nối**
   - Thấy địa chỉ ví hiển thị: `0xf39F...2266`
   - Trạng thái: **"✅ Đã kết nối"**
   - Role: **"👑 Quản trị viên"** (nếu dùng Account #0)

---

## 🔐 Đăng Nhập Bằng MetaMask

### Tính Năng Mới!

Bây giờ bạn có thể đăng nhập **trực tiếp** bằng ví MetaMask mà không cần username/password!

### Cách Sử Dụng:

1. **Đăng Ký Tài Khoản Với Wallet**
   - Truy cập trang login: `Frontend/login.html`
   - Đăng ký tài khoản bình thường
   - Khi tạo user trong database, wallet address sẽ tự động được gán

2. **Đăng Nhập Bằng MetaMask**
   - Trên trang login, nhấn **"Đăng nhập với MetaMask"**
   - MetaMask popup → chọn tài khoản → Connect
   - Hệ thống tự động:
     - Lấy wallet address
     - Tìm user trong database
     - Đăng nhập tự động
     - Chuyển về trang chính

3. **Nếu Wallet Chưa Đăng Ký**
   - Hệ thống thông báo: "Ví này chưa được liên kết"
   - Có thể đăng ký tài khoản mới
   - Wallet sẽ tự động được liên kết

---

## 🎯 Các Tính Năng Đã Cải Thiện

### ✨ Giao Diện Mới
- **CSS hiện đại** với gradient và animation mượt mà
- **Toast notifications** với icon và màu sắc theo loại thông báo
- **Responsive design** tối ưu cho mobile
- **Hover effects** và transitions mượt mà

### 🔒 Bảo Mật
- Tự động kiểm tra mạng blockchain
- Xác thực wallet address
- Xử lý lỗi chi tiết
- Session management

### 🚀 Hiệu Năng
- Kết nối nhanh hơn
- Loading states rõ ràng
- Auto-retry khi có lỗi
- Tối ưu hóa Web3 calls

---

## ❗ Xử Lý Lỗi Thường Gặp

### 1. "Vui lòng cài đặt MetaMask"
- **Nguyên nhân**: Chưa cài MetaMask extension
- **Giải pháp**: Tải và cài đặt từ https://metamask.io/download/

### 2. "Smart contract chưa được deploy"
- **Nguyên nhân**: Chưa deploy contract hoặc sai địa chỉ
- **Giải pháp**: 
  ```bash
  npx hardhat run scripts/deploy.js --network localhost
  ```
  - Cập nhật `CONTRACT_ADDRESS` trong `app.js`

### 3. "Bạn đã từ chối kết nối"
- **Nguyên nhân**: Nhấn "Reject" trong MetaMask popup
- **Giải pháp**: Thử lại và nhấn "Connect"

### 4. "Ví này chưa được liên kết"
- **Nguyên nhân**: Wallet address chưa có trong database
- **Giải pháp**: Đăng ký tài khoản mới hoặc liên kết wallet với account hiện tại

### 5. "Lỗi kết nối server"
- **Nguyên nhân**: Backend chưa chạy
- **Giải pháp**:
  ```bash
  cd backend
  npm start
  ```

---

## 📝 Lưu Ý Quan Trọng

### ⚠️ Bảo Mật
- **KHÔNG BAO GIỜ** chia sẻ Private Key với người khác
- **KHÔNG** sử dụng ví test trên mainnet
- **LƯU GIỮ** Recovery Phrase ở nơi an toàn
- Chỉ kết nối với các trang web tin cậy

### 🔄 Reset Hardhat
Nếu gặp lỗi nonce hoặc transaction stuck:

1. Mở MetaMask
2. Settings → Advanced
3. Nhấn **"Clear activity tab data"**
4. Restart Hardhat node

### 💡 Best Practices
- Luôn kiểm tra network trước khi transaction
- Xác nhận địa chỉ contract đúng
- Test với số lượng nhỏ trước
- Backup dữ liệu quan trọng

---

## 🆘 Hỗ Trợ

Nếu gặp vấn đề:
1. Check console log (F12)
2. Kiểm tra Hardhat node có đang chạy
3. Verify MetaMask đã kết nối đúng network
4. Xem file log trong `backend/`

---

## 📚 Tài Liệu Tham Khảo

- MetaMask Docs: https://docs.metamask.io/
- Hardhat Network: https://hardhat.org/hardhat-network/
- Web3.js: https://web3js.readthedocs.io/
- Ethers.js: https://docs.ethers.io/

---

**Chúc bạn sử dụng thành công! 🎉**
