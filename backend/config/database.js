const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://BauCuWeb:wpgjFkXMN1Z5EFpZ@cluster0.viv3ng4.mongodb.net/Buoi4_group12?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        // Mongoose connection options
        mongoose.set('strictQuery', false);

        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s
            socketTimeoutMS: 45000,
        });

        console.log('✓ Đã kết nối MongoDB Atlas thành công');

        // Handle connection events
        mongoose.connection.on('error', (err) => {
            console.error('⚠️ MongoDB connection error:', err.message);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️ MongoDB disconnected');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('✓ MongoDB reconnected');
        });

    } catch (error) {
        console.error('❌ Lỗi kết nối MongoDB:', error.message);
        console.log('⚠️ Server sẽ chạy mà không có database.');
        console.log('💡 Kiểm tra: 1) Whitelist IP trong MongoDB Atlas, 2) URI đúng, 3) Kết nối internet');
        // Không exit, để server chạy tiếp
    }
};

module.exports = connectDB;
