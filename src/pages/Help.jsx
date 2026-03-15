import { useState } from 'react';
import { Link } from 'react-router-dom';

function Help() {
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { icon: 'fa-solid fa-wallet', title: 'Thanh toán', desc: 'Hướng dẫn về ví và các phương thức thanh toán' },
        { icon: 'fa-solid fa-truck-fast', title: 'Vận chuyển', desc: 'Theo dõi đơn hàng và chính sách giao hàng' },
        { icon: 'fa-solid fa-box-open', title: 'Trả hàng & Hoàn tiền', desc: 'Quy trình đổi trả và nhận lại tiền' },
        { icon: 'fa-solid fa-user-shield', title: 'Bảo mật', desc: 'Quản lý tài khoản và bảo mật thông tin' },
        { icon: 'fa-solid fa-ticket', title: 'Ưu đãi & Voucher', desc: 'Cách săn và sử dụng mã giảm giá' },
        { icon: 'fa-solid fa-store', title: 'Người bán', desc: 'Dành cho đối tác kinh doanh trên hệ thống' },
    ];

    const faqs = [
        'Làm thế nào để thay đổi địa chỉ nhận hàng?',
        'Tại sao đơn hàng của tôi bị hủy?',
        'Làm sao để liên hệ trực tiếp với người bán?',
        'Tôi có thể thanh toán bằng tiền mặt khi nhận hàng không?',
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header / Hero Section */}
            <div className="bg-red-500 py-10 px-4 shadow-inner">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-white mb-6">Xin chào, chúng tôi có thể giúp gì cho bạn?</h1>
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Nhập từ khóa hoặc nội dung cần hỗ trợ..."
                            className="w-full py-3 px-6 bg-white rounded-full shadow-lg outline-none text-gray-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute right-0 -top-0 text-red-500 text-2xl px-2 py-2 rounded-full hover:bg-gray-100 hover:text-red-500 transition-colors cursor-pointer">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Danh mục phổ biến */}
                <h2 className="text-xl font-semibold text-gray-800 mb-8 border-l-4 border-red-500 pl-3">
                    Danh mục hỗ trợ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all cursor-pointer group"
                        >
                            <i
                                className={`${item.icon} text-3xl text-red-500 mb-4 group-hover:scale-110 transition-transform`}
                            ></i>
                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-red-500 pl-3">
                            Câu hỏi thường gặp
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((q, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-4 bg-white rounded-sm border border-gray-100 hover:bg-red-50 cursor-pointer group"
                                >
                                    <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                                        {q}
                                    </span>
                                    <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Liên hệ trực tiếp */}
                    <div className="bg-red-50 p-8 rounded-sm border border-red-100 text-center">
                        <h2 className="text-xl font-bold text-red-600 mb-4">Bạn vẫn chưa tìm thấy câu trả lời?</h2>
                        <p className="text-gray-600 mb-8">
                            Đội ngũ chăm sóc khách hàng của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
                        </p>
                        <div className="space-y-4">
                            <button className="w-full bg-red-500 text-white font-bold py-3 rounded-sm hover:bg-red-600 shadow-md flex items-center justify-center gap-2">
                                <i className="fa-solid fa-comments"></i> Chat trực tiếp với CSKH
                            </button>
                            <button className="w-full bg-white text-red-500 border border-red-500 font-bold py-3 rounded-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                                <i className="fa-solid fa-phone"></i> Gọi tổng đài: 1900 1234
                            </button>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-20 text-center border-t border-gray-200 pt-8">
                    <Link to="/" className="text-red-500 hover:underline flex items-center justify-center gap-2">
                        <i className="fa-solid fa-arrow-left"></i> Quay lại trang chủ mua sắm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Help;
