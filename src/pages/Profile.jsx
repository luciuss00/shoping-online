import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import SideBarProfile from '../components/Sidebar/SidebarProfile';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Profile() {
    const fileInputRef = useRef(null);

    const [userData, setUserData] = useState({
        name: '',
        realName: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        birthDate: { day: '', month: '', year: '' },
    });

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        isSuccess: false,
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData((prev) => ({
                ...prev,
                name: user.name || '',
                realName: user.realName || '',
                email: user.email || '',
                phone: user.phone || '',
                address: user.address || '',
                gender: user.gender || '',
                birthDate: user.birthDate || { day: '', month: '', year: '' },
                image: user.image || '', // Lấy ảnh từ local (nếu có)
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleBirthDateChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            birthDate: {
                ...prev.birthDate,
                [name]: value,
            },
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Kiểm tra dung lượng (tối đa 1MB)
        if (file.size > 1024 * 1024) {
            setModalConfig({
                isOpen: true,
                message: 'Dung lượng file quá lớn (tối đa 1MB)!',
                isSuccess: false,
            });
            return;
        }

        // Kiểm tra định dạng
        if (!file.type.match('image.*')) {
            setModalConfig({
                isOpen: true,
                message: 'Vui lòng chọn file hình ảnh (.jpg, .png)!',
                isSuccess: false,
            });
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setUserData((prev) => ({ ...prev, image: reader.result })); // Lưu Base64 vào state
        };
        reader.readAsDataURL(file);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('user')) || {};

        const updatedUser = {
            ...currentUser,
            realName: userData.realName,
            phone: userData.phone,
            address: userData.address,
            gender: userData.gender,
            birthDate: userData.birthDate,
            image: userData.image, // Lưu ảnh vào localStorage
        };

        localStorage.setItem('user', JSON.stringify(updatedUser));

        setModalConfig({
            isOpen: true,
            message: 'Cập nhật thành công!',
            isSuccess: true,
        });
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <div className="max-w-[1200px] mx-auto py-5 flex gap-5">
                {/* SIDEBAR BÊN TRÁI */}
                <SideBarProfile name={userData.name} image={userData.image} />

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
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">
                                    Tên tài khoản<noframes></noframes>
                                </label>
                                <div className="w-3/4">
                                    <input
                                        type="text"
                                        value={userData.name}
                                        readOnly
                                        className="w-full h-10 px-3 border border-gray-200 rounded-sm outline-none bg-white text-gray-800"
                                    />
                                    <p className="text-[12px] text-gray-400 mt-1">Tên Tài Khoản không thể thay đổi</p>
                                </div>
                            </div>

                            {/* Tên */}
                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Họ Tên</label>
                                <input
                                    type="text"
                                    name="realName"
                                    value={userData.realName}
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
                                <input
                                    type="text"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    className="w-3/4 h-10 px-3 border border-gray-300 rounded-sm focus:border-gray-400 outline-none"
                                />
                            </div>

                            <div className="flex items-center">
                                <label className="w-1/4 text-right pr-6 text-gray-500 text-[14px]">Địa chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleChange}
                                    className="w-3/4 h-10 px-3 border border-gray-300 rounded-sm focus:border-gray-400 outline-none"
                                />
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
                                                className="w-4 h-4 accent-red-500"
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
                                    {/* Chọn Ngày */}
                                    <select
                                        name="day"
                                        value={userData.birthDate.day}
                                        onChange={handleBirthDateChange}
                                        className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none bg-white"
                                    >
                                        <option value="">Ngày</option>
                                        {[...Array(31)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Chọn Tháng */}
                                    <select
                                        name="month"
                                        value={userData.birthDate.month}
                                        onChange={handleBirthDateChange}
                                        className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none bg-white"
                                    >
                                        <option value="">Tháng</option>
                                        {[...Array(12)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                Tháng {i + 1}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Chọn Năm */}
                                    <select
                                        name="year"
                                        value={userData.birthDate.year}
                                        onChange={handleBirthDateChange}
                                        className="h-10 w-full border border-gray-300 px-3 rounded-sm outline-none bg-white"
                                    >
                                        <option value="">Năm</option>
                                        {[...Array(100)].map((_, i) => (
                                            <option key={2026 - i} value={2026 - i}>
                                                {2026 - i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Nút lưu */}
                            <div className="flex items-center pt-2">
                                <div className="w-1/4"></div>
                                <button
                                    onClick={handleSave}
                                    className="bg-red-500 text-white px-7 py-[10px] rounded-[2px] text-sm hover:bg-red-600 min-w-[70px] cursor-pointer"
                                >
                                    Lưu
                                </button>
                            </div>
                        </form>

                        {/* Upload ảnh */}
                        <div className="w-[280px] border-l border-gray-100 flex flex-col items-center pt-4">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-100 mb-4">
                                {userData.image ? (
                                    <img src={userData.image} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <i className="fa-solid fa-user text-5xl text-gray-300"></i>
                                )}
                            </div>

                            {/* Input file ẩn */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageChange}
                                accept=".jpg,.jpeg,.png"
                                className="hidden"
                            />

                            <button
                                type="button"
                                onClick={() => fileInputRef.current.click()} // Kích hoạt input file
                                className="border border-gray-300 px-4 py-2 text-sm text-gray-600 rounded-sm hover:bg-gray-200 shadow-sm cursor-pointer"
                            >
                                Chọn Ảnh
                            </button>

                            <div className="mt-4 text-gray-400 text-[13.5px] text-center leading-relaxed">
                                <p>Dung lượng file tối đa 1 MB</p>
                                <p>Định dạng: .JPG, .PNG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Notification
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                check={modalConfig.isSuccess}
            />
        </div>
    );
}

export default Profile;
