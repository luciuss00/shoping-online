import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/authService';
import SignLayout from '../components/SignLayout';
import NotificationSign from '../components/Notification/NotificationSign';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignUp() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });
    const [isRegistered, setIsRegistered] = useState(false);
    const showModal = (msg) => {
        setModalConfig({ isOpen: true, message: msg });
    };
    const closeModal = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
        if (isRegistered) {
            navigate('/signin');
        }
    };
    // Kiểm tra xem mật khẩu có khớp và số điện thoại có hợp lệ không
    const isPasswordMatch = password === confirmPassword;
    const canSubmit = isPasswordMatch && fullName.length > 0 && email.length > 0 && password.length > 0;

    // api
    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = {
            fullname: fullName,
            email: email,
            password: password,
        };
        try {
            const response = await AuthService.register(userData);
            localStorage.setItem('user', JSON.stringify(response.data));
            setIsRegistered(true); // Đánh dấu đã đăng ký xong
            showModal('Đăng ký thành công!');
        } catch (err) {
            console.log(userData);
            console.error(err);
            showModal('Đăng ký thất bại, email có thể đã tồn tại.');
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
                            {/* Email */}
                            <div className="mb-5 relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full h-[40px] pl-[12px] border ${'border-gray-300'}`}
                                    placeholder="Email"
                                />
                            </div>

                            {/* Mật khẩu */}
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

                            {/* Nhập lại mật khẩu */}
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

                    <div className="mt-6">
                        <p className="text-center text-[13px] text-black">Bằng việc đăng kí, bạn đã đồng ý về</p>
                        <div className="flex justify-center">
                            <a className="text-[#e84040] text-[13px] cursor-pointer">Điều khoản dịch vụ </a>
                            <span className="text-[12px] mx-1 mt-[1.5px]"> & </span>
                            <a className="text-[#e84040] text-[13px] cursor-pointer">Chính sách bảo mật</a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <p className="mr-1 text-[#00000042]">Bạn đã có tài khoản?</p>
                        <Link to="/signin" className="text-[#e84040]">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </SignLayout>
            <NotificationSign isOpen={modalConfig.isOpen} message={modalConfig.message} onClose={closeModal} />
        </>
    );
}

export default SignUp;
