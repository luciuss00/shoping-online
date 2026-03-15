import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignLayout from '../components/SignLayout';

function ResetPassword() {
    const [phone, setPhone] = useState('');
    const [errorValid, setErrorValid] = useState(false);
    const [firstInput, setFirstInput] = useState(true);

    const validatePhone = (phone) => {
        const regex = /^(0[3|5|7|8|9])([0-9]{8})$/;
        if (!regex.test(phone)) {
            setErrorValid(false);
            setFirstInput(false);
        } else {
            setErrorValid(true);
            setFirstInput(true);
        }
        setPhone(phone);
    };

    return (
        <>
            <SignLayout name="Đặt lại mật khẩu" checkPage={false}>
                <div className="inline-block w-[500px] h-[275px] shadow-xl border-t-3 border-red-100">
                    <div className="flex items-center w-[500px] h-[80px] text-[20px]">
                        <button className="w-[80px] h-[30px] py-[1px] px-[6px]">
                            <Link to="/signin">
                                <i className="fa-solid fa-arrow-left text-red-500"></i>
                            </Link>
                        </button>

                        <h1 className="pl-26 w-[420px]">Đặt lại mật khẩu</h1>
                    </div>

                    <div className="w-[500px] h-[189px] px-[80px] pb-[64px] pt-5">
                        <form action="">
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => validatePhone(e.target.value)}
                                className={
                                    firstInput
                                        ? 'border border-gray-300 w-full h-[40px] pl-[12px]'
                                        : 'border border-red-300 w-full h-[40px] pl-[12px] focus:outline-none bg-[#fff6f7]'
                                }
                                placeholder="Email"
                            />
                            {firstInput ? (
                                <p></p>
                            ) : (
                                <p className="text-[13px] absolute text-red-500">Số điện thoại không hợp lệ</p>
                            )}

                            <button
                                disabled={!errorValid}
                                className={`mt-8 w-full h-[40px] text-white font-medium transition-colors duration-300 ${
                                    errorValid
                                        ? 'bg-[#e84040] cursor-pointer opacity-100'
                                        : 'bg-[#e1514e] cursor-not-allowed opacity-70'
                                }`}
                            >
                                TIẾP THEO
                            </button>
                        </form>
                    </div>
                </div>
            </SignLayout>
        </>
    );
}

export default ResetPassword;
