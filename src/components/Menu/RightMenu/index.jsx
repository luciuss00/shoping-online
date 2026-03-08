import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="group relative flex items-center hover:text-white/70 mx-3">
                {/* Icon và Chữ */}
                <div className="flex mt-[1.2px] cursor-pointer">
                    <i className="fa-regular fa-bell mr-1.5 text-[20px] "></i>
                    <p>Thông Báo</p>
                </div>
                {/* Popover Content */}
                <div className="invisible w-90 h-80 group-hover:visible absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white text-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 z-50">
                    {/* Khoảng trống */}
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                    {/* Mũi tên (Optional) */}
                    <div className="pt-2 absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-200"></div>
                    <div>
                        <i className="fa-regular fa-circle-user text-[60px] text-red-500 ml-33 mt-13"></i>
                        <p className="text-sm text-center mb-4 mt-5 text-[18px]">Đăng nhập để xem thông báo</p>
                    </div>

                    <div className="flex gap-2 justify-center text-[14px]">
                        <Link
                            to="/signup"
                            className="bg-gray-100 cursor-pointer hover:bg-gray-200 py-2 px-4 rounded transition"
                        >
                            Đăng ký
                        </Link>
                        <Link
                            to="/signin"
                            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white  py-2 px-4 rounded transition"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>

            {/* Icon Người dùng & Popover */}
            <div className="relative group ml-3 py-2 " onMouseLeave={handleMouseLeave}>
                <div className="flex items-center hover:text-white/70 cursor-pointer">
                    <i className="fa-regular fa-user text-[18px] mr-2"></i>
                    <span>Tài khoản</span>
                    <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
                </div>

                {/* Popover Container - Đã sửa để căn giữa */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] hidden group-hover:block pt-2 z-50">
                    {/* Lớp đệm cầu nối để di chuột không bị mất hover */}
                    <div className="absolute -top-2 left-0 w-full h-2 bg-transparent"></div>

                    {/* Mũi tên - Đã sửa để căn giữa */}
                    <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-gray-200 z-10"></div>

                    <div className="relative bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden text-black min-h-[150px] transition-all">
                        {/* VIEW CHÍNH */}
                        {view === 'main' && (
                            <div className="animate-in fade-in slide-in-from-right-1 duration-200">
                                <div className="flex flex-col border-b border-gray-100">
                                    <Link
                                        to="/signup"
                                        className="px-4 py-3 hover:bg-gray-50 hover:text-red-500 transition-colors"
                                    >
                                        <i className="fa-solid fa-user-plus mr-2 w-5"></i>
                                        Đăng ký
                                    </Link>
                                    <Link
                                        to="/signin"
                                        className="px-4 py-3 hover:bg-gray-50 hover:text-red-500 transition-colors"
                                    >
                                        <i className="fa-solid fa-arrow-right-to-bracket mr-2 w-5"></i>
                                        Đăng nhập
                                    </Link>
                                </div>

                                <a
                                    href="/help"
                                    target="_blank"
                                    className="flex items-center px-4 py-3 border-b border-gray-100 hover:text-red-500 hover:bg-gray-50 transition-colors"
                                >
                                    <i className="fa-regular fa-circle-question mr-2 w-5"></i>
                                    <span>Hỗ Trợ</span>
                                </a>

                                <div
                                    onClick={() => setView('language')}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 hover:text-red-500 cursor-pointer transition-colors"
                                >
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-earth-americas mr-2 w-5"></i>
                                        <span>{language}</span>
                                    </div>
                                    <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                                </div>
                            </div>
                        )}

                        {/* VIEW NGÔN NGỮ */}
                        {view === 'language' && (
                            <div className="animate-in fade-in slide-in-from-left-1 duration-200">
                                <div className="flex items-center px-4 py-3 border-b border-gray-100 font-medium">
                                    <i
                                        className="fa-solid fa-arrow-left mr-3 cursor-pointer hover:text-red-500"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
                                            setView('main');
                                        }}
                                    ></i>
                                    Chọn ngôn ngữ
                                </div>
                                <div className="py-1">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.value}
                                            onClick={() => setLanguage(lang.value)}
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
