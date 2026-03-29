import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/authService';
import SignLayout from '../components/SignLayout';
import Notification from '../components/Notification';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignUp() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Gom trạng thái modal vào một object để quản lý biến 'check' (isSuccess)
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        isSuccess: false,
    });

    // Cập nhật hàm showModal để nhận thêm tham số success
    const showModal = (msg, success = false) => {
        setModalConfig({
            isOpen: true,
            message: msg,
            isSuccess: success,
        });
    };

    const closeModal = () => {
        const wasSuccess = modalConfig.isSuccess;
        setModalConfig({ ...modalConfig, isOpen: false });

        // Nếu đăng ký thành công thì mới chuyển hướng
        if (wasSuccess) {
            navigate('/signin');
        }
    };

    const isPasswordMatch = password === confirmPassword;
    const canSubmit = isPasswordMatch && fullName.length > 0 && email.length > 0 && password.length > 0;

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = {
            fullname: fullName,
            email: email,
            password: password,
        };
        try {
            const response = await AuthService.register(userData);
            // Lưu thông tin nếu cần hoặc chỉ thông báo thành công
            localStorage.setItem('user', JSON.stringify(response.data));

            // Truyền true cho thành công
            showModal('Đăng ký thành công!', true);
        } catch (err) {
            console.error(err);
            // Truyền false cho thất bại
            showModal('Đăng ký thất bại, email có thể đã tồn tại.', false);
        }
    };

    return (
        <>
            <SignLayout name="Đăng ký">
                <div className="w-[500px] min-h-[450px] mt-10 py-6 bg-white rounded-[5px] shadow-xl border-t-3 border-gray-100">
                    <div className="flex items-center h-[60px] px-[30px] justify-center">
                        <h2 className="text-[22px]">Đăng ký</h2>
                    </div>

                    <div className="px-[80px]">
                        <form onSubmit={handleRegister}>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="my-5 w-full h-[40px] pl-[12px] pr-[40px] border border-gray-300"
                                placeholder="Tên tài khoản"
                            />
                            <div className="mb-5 relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-[40px] pl-[12px] border border-gray-300"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="mb-5 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border border-gray-300 w-full h-[40px] pl-[12px] pr-[40px]"
                                    placeholder="Mật khẩu"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-gray-400"
                                >
                                    {showPassword ? (
                                        <i className="fa-solid fa-eye"></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash"></i>
                                    )}
                                </button>
                            </div>

                            <div className="mb-1 relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full h-[40px] pl-[12px] pr-[40px] border ${
                                        !isPasswordMatch && confirmPassword !== ''
                                            ? 'border-red-500 bg-[#fff6f7] focus:outline-none'
                                            : 'border-gray-300'
                                    }`}
                                    placeholder="Nhập lại mật khẩu"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2.5 text-gray-400"
                                >
                                    {showConfirmPassword ? (
                                        <i className="fa-solid fa-eye"></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash"></i>
                                    )}
                                </button>
                                {!isPasswordMatch && confirmPassword !== '' && (
                                    <p className="text-[12px] text-red-500 absolute mt-1">Mật khẩu không khớp</p>
                                )}
                            </div>

                            <button
                                disabled={!canSubmit}
                                className={`mt-8 w-full h-[40px] text-white font-medium transition-colors duration-300 ${
                                    canSubmit
                                        ? 'bg-[#e84040] cursor-pointer opacity-100'
                                        : 'bg-[#e1514e] cursor-not-allowed opacity-70'
                                }`}
                            >
                                ĐĂNG KÝ
                            </button>
                        </form>
                    </div>
                    {/* ... phần Footer (Điều khoản & Đăng nhập) giữ nguyên ... */}
                </div>
            </SignLayout>

            {/* Truyền giá trị check vào component thông báo */}
            <Notification
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                onClose={closeModal}
                check={modalConfig.isSuccess}
            />
        </>
    );
}

export default SignUp;
