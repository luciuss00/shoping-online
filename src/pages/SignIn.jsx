import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/authService';
import SignLayout from '../components/SignLayout';
import NotificationSign from '../components/Notification/NotificationSign';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignIn() {
    const navigate = useNavigate();
    const [nameSignIn, setNameSignIn] = useState('');
    const [checkName, setCheckName] = useState(true);
    const [pass, setPass] = useState('');
    const [checkPass, setCheckPass] = useState(true);
    const [showPass, setShowPass] = useState(false); // State để ẩn/hiện mật khẩu
    // lỗi từ API
    const [apiError, setApiError] = useState('');

    const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });
    const [isSuccess, setIsSuccess] = useState(false);

    const showModal = (msg) => {
        setModalConfig({ isOpen: true, message: msg });
    };

    const closeModal = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
        if (isSuccess) {
            navigate('/', { replace: true });
            window.location.reload();
        }
    };

    const validateName = (val) => {
        setApiError(''); // Xóa lỗi API khi người dùng gõ lại
        if (val === '') setCheckName(false);
        else setCheckName(true);
        setNameSignIn(val);
    };

    const validatePass = (val) => {
        setApiError(''); // Xóa lỗi API khi người dùng gõ lại
        if (val === '') setCheckPass(false);
        else setCheckPass(true);
        setPass(val);
    };

    const checkAll = checkName && checkPass && nameSignIn !== '' && pass !== '';

    const handleLogin = async (e) => {
        e.preventDefault();
        const loginData = { email: nameSignIn, password: pass };

        try {
            const response = await AuthService.login(loginData);
            // Kiểm tra status 200 như yêu cầu
            if (response.status === 200) {
                setIsSuccess(true); // Đánh dấu thành công
                showModal('Đăng nhập thành công!');
            }
        } catch (error) {
            const status = error.response?.status;
            if (status === 400 || status === 404) {
                setApiError('Sai email hoặc mật khẩu, vui lòng kiểm tra lại!');
            } else {
                showModal('Có lỗi hệ thống xảy ra!');
            }
        }
    };

    return (
        <>
            <SignLayout name="Đăng nhập">
                <div className="w-[500px] h-[477px] bg-white rounded-[5px] shadow-xl border-t-3 border-gray-100">
                    <div className="flex items-center justify-between px-[30px] py-[22px] w-[500px] h-[102.8px]">
                        <div className=" text-[22px] mx-auto">
                            <h2>Đăng nhập</h2>
                        </div>
                    </div>

                    <div className="w-[500px] h-[190px]">
                        <div className=" px-[80px]">
                            <form onSubmit={handleLogin}>
                                {/* Tên tài khoản */}
                                <div className="relative mb-8">
                                    <input
                                        type="text"
                                        value={nameSignIn}
                                        onChange={(e) => validateName(e.target.value)}
                                        className={
                                            checkName && !apiError
                                                ? 'border border-gray-300 w-full h-[40px] pl-[12px]'
                                                : 'border border-red-300 w-full h-[40px] pl-[12px] focus:outline-none bg-[#fff6f7]'
                                        }
                                        placeholder="Email"
                                    />
                                    {!checkName && (
                                        <p className="text-[13px] absolute text-red-500">Vui lòng điền vào mục này</p>
                                    )}
                                </div>

                                {/* Mật khẩu */}
                                <div className="relative">
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        value={pass}
                                        onChange={(e) => validatePass(e.target.value)}
                                        className={
                                            checkPass
                                                ? 'border border-gray-300 w-full h-[40px] pl-[12px] pr-[40px]'
                                                : 'border border-red-300 w-full h-[40px] pl-[12px] pr-[40px] focus:outline-none bg-[#fff6f7]'
                                        }
                                        placeholder="Mật khẩu"
                                    />
                                    {apiError && <p className="text-[13px] absolute text-red-500 mt-1">{apiError}</p>}
                                    {!checkPass && (
                                        <p className="text-[13px] absolute text-red-500">Vui lòng điền vào mục này</p>
                                    )}

                                    {/* Icon con mắt */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPass ? (
                                            <i className="fa-solid fa-eye"></i>
                                        ) : (
                                            <i className="fa-solid fa-eye-slash"></i>
                                        )}
                                    </button>

                                    {!checkPass && (
                                        <p className="text-[13px] absolute text-red-500">Vui lòng điền vào mục này</p>
                                    )}
                                </div>

                                <button
                                    disabled={!checkAll}
                                    className={
                                        checkAll
                                            ? 'mt-9 w-full h-[40px] text-white font-medium transition-colors duration-300 bg-[#e84040] cursor-pointer opacity-100'
                                            : 'mt-9 w-full h-[40px] text-white font-medium transition-colors duration-300 bg-[#e1514e] cursor-not-allowed opacity-70'
                                    }
                                >
                                    ĐĂNG NHẬP
                                </button>
                                <div className="flex justify-end mt-2">
                                    <Link
                                        to="/reset-password"
                                        alt="forgot password"
                                        className="text-[12px] text-blue-700"
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* API FB và GG */}
                    <div className="mt-0 px-[50px]">
                        <div className="flex items-center gap-2 mt-7 text-gray-400 text-sm">
                            <div className="flex-1 h-[1px] ml-[30px] bg-gray-300"></div>
                            <span className="px-2">HOẶC ĐĂNG NHẬP BẰNG</span>
                            <div className="flex-1 h-[1px] mr-[30px] bg-gray-300"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-5">
                            <button className="flex items-center justify-center gap-2 ml-[30px] border border-gray-300 rounded-sm py-2 hover:bg-gray-50">
                                <i className="fa-brands fa-facebook text-blue-600 text-xl"></i>
                                <span>Facebook</span>
                            </button>

                            <button className="flex items-center justify-center gap-2 mr-[30px] border border-gray-300 rounded-sm py-2 hover:bg-gray-50">
                                <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="google" />
                                <span>Google</span>
                            </button>
                        </div>

                        <div className="flex justify-center mt-6">
                            <p className="text-center mt-0 mr-1 text-[15px] text-[#00000042]">Bạn là người mới?</p>
                            <Link to="/signup" className="text-[#ee4d2d] mt-0 text-[15px]">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </SignLayout>
            <NotificationSign isOpen={modalConfig.isOpen} message={modalConfig.message} onClose={closeModal} />
        </>
    );
}

export default SignIn;
