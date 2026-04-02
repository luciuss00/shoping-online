import { Navigate, Outlet } from 'react-router-dom';

const UserProtectedRoute = () => {
    const tokenData = localStorage.getItem('token');
    const userData = localStorage.getItem('user'); // Lấy string trước khi parse để tránh lỗi

    // 1. Kiểm tra nếu không có dữ liệu
    if (!tokenData || !userData) {
        return <Navigate to="/signin" replace />;
    }

    try {
        const token = JSON.parse(tokenData);
        const user = JSON.parse(userData);

        // 2. Kiểm tra Token hợp lệ
        if (!token || !token.accessToken) {
            return <Navigate to="/signin" replace />;
        }

        // 3. KIỂM TRA STATUS (Giả sử giá trị bị khóa là 'locked' hoặc 'block')
        if (user.status === 'block') {
            return <Navigate to="/blocked-account" replace />;
        }

        // 4. Nếu mọi thứ ổn thì cho vào
        return <Outlet />;
    } catch (error) {
        console.error('Data format invalid:', error);
        return <Navigate to="/signin" replace />;
    }
};

export default UserProtectedRoute;
