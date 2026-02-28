import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function RightMenu() {
    const [language, setLanguage] = useState('Tiếng Việt');
    const [view, setView] = useState('main'); // 'main' hoặc 'language'

    const languages = [
        { label: 'Tiếng Việt', value: 'Tiếng Việt' },
        { label: 'English', value: 'English' },
        { label: 'Japan', value: 'Japan' },
    ];

    // Reset view về main khi người dùng rời chuột khỏi menu
    const handleMouseLeave = () => {
        setView('main');
    };

    return (
        <div className="flex h-[34px] items-center justify-end px-10 text-white text-[14px]">
            <div className="flex items-center hover:text-white/70 cursor-pointer mx-3">
                <i className="fa-regular fa-bell mr-1.5 text-[20px]"></i>
                Thông Báo
            </div>

            {/* Icon Người dùng & Popover */}
            <div className="relative group ml-3 py-2 cursor-pointer" onMouseLeave={handleMouseLeave}>
                <div className="flex items-center hover:text-white/70">
                    <i className="fa-regular fa-user text-[18px] mr-2"></i>
                    <span>Tài khoản</span>
                    <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
                </div>

                {/* Popover Container */}
                <div className="absolute top-full right-0 w-[180px] hidden group-hover:block pt-2 z-50">
                    <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden text-black min-h-[150px] transition-all">
                        {/* VIEW CHÍNH: Hiện Đăng nhập, Hỗ trợ, Ngôn ngữ */}
                        {view === 'main' && (
                            <div className="animate-in fade-in slide-in-from-right-1 duration-200">
                                <div className="flex flex-col border-b border-gray-100">
                                    <NavLink
                                        to="/signup"
                                        className="px-4 py-3 hover:bg-gray-50 hover:text-red-500 transition-colors"
                                    >
                                        <i className="fa-solid fa-user-plus mr-2"></i>
                                        Đăng ký
                                    </NavLink>
                                    <NavLink
                                        to="/signin"
                                        className="px-4 py-3 hover:bg-gray-50 hover:text-red-500 transition-colors"
                                    >
                                        <i className="fa-solid fa-arrow-right-to-bracket mr-2 "></i>
                                        Đăng nhập
                                    </NavLink>
                                </div>

                                <a
                                    href="/help"
                                    target="_blank"
                                    className="flex items-center px-4 py-3 border-b border-gray-100 hover:text-red-500 hover:bg-gray-50 transition-colors"
                                >
                                    <i className="fa-regular fa-circle-question mr-2  "></i>
                                    <span>Hỗ Trợ</span>
                                </a>

                                {/* Mục chọn ngôn ngữ để mở view tiếp theo */}
                                <div
                                    onClick={() => setView('language')}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 hover:text-red-500 cursor-pointer transition-colors"
                                >
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-earth-americas mr-2"></i>
                                        <span>{language}</span>
                                    </div>
                                    <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                                </div>
                            </div>
                        )}

                        {/* VIEW NGÔN NGỮ: Hiện danh sách ngôn ngữ và nút quay lại */}
                        {view === 'language' && (
                            <div className="animate-in fade-in slide-in-from-left-1 duration-200">
                                <div className="flex items-center px-4 py-3 border-b border-gray-100">
                                    <i
                                        className="fa-solid fa-arrow-left mr-3 hover:text-red-500"
                                        onClick={() => setView('main')}
                                    ></i>
                                    Chọn ngôn ngữ
                                </div>
                                <div className="py-1">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.value}
                                            onClick={() => {
                                                setLanguage(lang.value);
                                            }}
                                            className={`px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer transition-colors ${
                                                language === lang.value ? 'bg-red-50 text-red-500 font-medium' : ''
                                            }`}
                                        >
                                            {lang.label}
                                            {language === lang.value && <i className="fa-solid fa-check"></i>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightMenu;
