import { Link } from 'react-router-dom';
import { useState } from 'react';
import SignLayout from '../../components/Layout/SignLayout';

function SignIn() {
    const [nameSignIn, setNameSignIn] = useState('');
    const [checkName, setCheckName] = useState(true);
    const [pass, setPass] = useState('');
    const [checkPass, setCheckPass] = useState(true);

    const validateName = (nameSignIn) => {
        if (nameSignIn === '') setCheckName(false);
        else setCheckName(true);
        setNameSignIn(nameSignIn);
    };

    const validatePass = (pass) => {
        if (pass === '') setCheckPass(false);
        else setCheckPass(true);
        setPass(pass);
    };

    const checkAll = checkName && checkPass && nameSignIn != '' && pass != '';

    return (
        <>
            <SignLayout name="Đăng nhập">
                <div className="w-[500px] h-[477px] bg-white rounded-[5px] shadow-xl border-t-3 border-red-100">
                    <div className="flex items-center justify-between px-[30px] py-[22px] w-[500px] h-[102.8px]">
                        <div className=" text-[22px] mx-auto">
                            <h2>Đăng nhập</h2>
                        </div>
                    </div>

                    {/* Form đăng nhập */}

                    <div className="w-[500px] h-[190px]">
                        <div className=" px-[80px]">
                            <form action="">
                                {/* Tên tài khoản */}
                                <input
                                    type="text"
                                    value={nameSignIn}
                                    onChange={(e) => validateName(e.target.value)}
                                    className={
                                        checkName
                                            ? 'border border-gray-300 w-full h-[40px] pl-[12px]'
                                            : 'border border-red-300 w-full h-[40px] pl-[12px] focus:outline-none bg-[#fff6f7]'
                                    }
                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                />
                                {checkName ? (
                                    <p></p>
                                ) : (
                                    <p className="text-[13px] absolute text-red-500">Vui lòng điền vào mục này</p>
                                )}
                                {/* Pass */}
                                <input
                                    type="text"
                                    value={pass}
                                    onChange={(e) => validatePass(e.target.value)}
                                    className={
                                        checkPass
                                            ? 'border border-gray-300 w-full h-[40px] pl-[12px] mt-8'
                                            : 'border border-red-300 w-full h-[40px] pl-[12px] focus:outline-none bg-[#fff6f7] mt-8'
                                    }
                                    placeholder="Mật khẩu"
                                />
                                {checkPass ? (
                                    <p></p>
                                ) : (
                                    <p className="text-[13px] absolute text-red-500">Vui lòng điền vào mục này</p>
                                )}

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
                                <Link to="/reset-password" className="text-[12px] text-blue-700">
                                    Quên mật khẩu ?
                                </Link>
                            </form>
                        </div>
                    </div>
                    {/* API FB và GG */}
                    <div className="mt-0 px-[50px]">
                        <div class="flex items-center gap-2 mt-7 text-gray-400 text-sm">
                            <div class="flex-1 h-[1px] ml-[30px] bg-gray-300"></div>
                            <span class="px-2 ">HOẶC ĐĂNG NHẬP BẰNG</span>
                            <div class="flex-1 h-[1px] mr-[30px] bg-gray-300"></div>
                        </div>

                        <div class="grid grid-cols-2 gap-3 mt-5">
                            <button class="flex items-center justify-center gap-2 ml-[30px] border border-gray-300 rounded-sm py-2 hover:bg-gray-50">
                                <i class="fa-brands fa-facebook text-blue-600 text-xl"></i>
                                <span>Facebook</span>
                            </button>

                            <button class="flex items-center justify-center gap-2 mr-[30px] border border-gray-300 rounded-sm py-2 hover:bg-gray-50">
                                <img src="https://www.google.com/favicon.ico" class="w-5 h-5" alt="google" />
                                <span>Google</span>
                            </button>
                        </div>

                        <div className="flex justify-center mt-6">
                            <p class="text-center mt-0 mr-1 text-[15px] text-[#00000042]">Bạn là người mới?</p>
                            <Link to="/signup" className="text-[#ee4d2d] mt-0 text-[15px]">
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </SignLayout>
        </>
    );
}

export default SignIn;
