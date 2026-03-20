import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideBarProfile from '../components/Sidebar/SidebarProfile';
import Footer from '../components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Profile() {
    const [userData, setUserData] = useState({
        userName: '',
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        birthDate: { day: '', month: '', year: '' },
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData((prev) => ({
                ...prev,
                userName: user.name,
                email: user.email,
            }));
        }
        console.log(user);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <div className="max-w-[1200px] mx-auto py-5 flex gap-5">
                {/* SIDEBAR BÊN TRÁI */}
                <SideBarProfile name={userData.userName} />

                {/* NỘI DUNG HỒ SƠ BÊN PHẢI */}
                <div className="flex-1 bg-white rounded-sm shadow-sm p-8">
                    <div className="mb-6 border-b border-gray-100 pb-4">
                        <h1 className="text-lg font-medium text-gray-800">Hồ Sơ Của Tôi</h1>
                        <p className="text-sm text-gray-600">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    </div>

                    <div className="flex">
                        <form className="flex-1 space-y-6 pr-12">
                            {/* Tên đăng nhập */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Tên đăng nhập</label>
                                <div className="w-3/4">
                                    <input
                                        type="text"
                                        value={userData.userName}
                                        readOnly
                                        className="w-full h-10 px-3 border border-gray-200 rounded-sm outline-none bg-white text-gray-800"
                                    />
                                    <p className="text-[12px] text-gray-400 mt-1">
                                        Tên Đăng nhập chỉ có thể thay đổi một lần.
                                    </p>
                                </div>
                            </div>

                            {/* Tên */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Tên</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={userData.fullName}
                                    onChange={handleChange}
                                    className="w-3/4 h-10 px-3 border border-gray-300 rounded-sm focus:border-gray-400 outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Email</label>
                                <div className="w-3/4 text-sm flex gap-2">
                                    <span>{userData.email}</span>
                                    <button type="button" className="text-blue-500 underline text-[13px]">
                                        Thay Đổi
                                    </button>
                                </div>
                            </div>

                            {/* Số điện thoại */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Số điện thoại</label>
                                <button type="button" className="text-blue-500 underline text-sm">
                                    Thêm
                                </button>
                            </div>

                            {/* Giới tính */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Giới tính</label>
                                <div className="w-3/4 flex gap-4">
                                    {['Nam', 'Nữ', 'Khác'].map((item) => (
                                        <label key={item} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={item}
                                                checked={userData.gender === item}
                                                onChange={handleChange}
                                                className="w-4 h-4 accent-[#ee4d2d]"
                                            />
                                            <span className="ml-2 text-sm text-gray-700">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Ngày sinh */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Ngày sinh</label>
                                <div className="w-3/4 flex gap-2">
                                    <select className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none appearance-none bg-white">
                                        <option>Ngày</option>
                                        {[...Array(31)].map((_, i) => (
                                            <option key={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                    <select className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none appearance-none bg-white">
                                        <option>Tháng</option>
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1}>Tháng {i + 1}</option>
                                        ))}
                                    </select>
                                    <select className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none appearance-none bg-white">
                                        <option>Năm</option>
                                        {[...Array(100)].map((_, i) => (
                                            <option key={2026 - i}>{2026 - i}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Nút lưu */}
                            <div className="flex items-center pt-2">
                                <div className="w-1/4"></div>
                                <button
                                    type="submit"
                                    className="bg-[#ee4d2d] text-white px-7 py-[10px] rounded-[2px] text-sm hover:opacity-90 min-w-[70px]"
                                >
                                    Lưu
                                </button>
                            </div>
                        </form>

                        {/* Upload ảnh */}
                        <div className="w-[280px] border-l border-gray-100 flex flex-col items-center pt-4">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 mb-4">
                                <i className="fa-solid fa-user text-5xl text-gray-300"></i>
                            </div>
                            <button className="border border-gray-300 px-4 py-2 text-sm text-gray-600 rounded-sm hover:bg-gray-50 shadow-sm">
                                Chọn Ảnh
                            </button>
                            <div className="mt-4 text-gray-400 text-[13.5px] text-center leading-relaxed">
                                <p>Dung lượng file tối đa 1 MB</p>
                                <p>Định dạng: .JPEG, .PNG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
