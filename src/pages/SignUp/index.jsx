import { Link } from 'react-router-dom';
import { useState } from 'react';
import SignLayout from '../../components/Layout/SignLayout';

function SignUp() {
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
            <SignLayout name="Đăng ký">
                <div className="w-[500px] h-[325px] bg-white rounded-[5px] shadow-xl border-t-3 border-red-100">
                    <div className="flex items-center h-[80px]">
                        <div className="flex items-center h-[68px] px-[30px] mx-auto">
                            <h2 className="text-[22px]">Đăng ký</h2>
                        </div>
                    </div>

                    <div>
                        {/* Form đăng ký */}
                        <div className="px-[80px]">
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
                                    placeholder="Số điện thoại"
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

                        <div>
                            <p class="text-center text-[13px] mt-6 text-black">Bằng việc đăng kí, bạn đã đồng ý về</p>
                            <div className="flex justify-center">
                                <a className="text-[#e84040] text-[13px]">Điều khoản dịch vụ </a>
                                <span className="text-[12px]"> & </span>
                                <a className="text-[#e84040] text-[13px]">Điều khoản dịch vụ </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <p className="mt-0 mr-1 text-[#00000042]">Bạn đã có tài khoản?</p>
                        <Link to="/signin" className="text-[#e84040]">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </SignLayout>
        </>
    );
}

export default SignUp;
