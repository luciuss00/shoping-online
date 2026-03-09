import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="max-w-[1440px] mx-auto px-[130px] py-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Cột 1: Giới thiệu */}
                    <div>
                        <h2 className="text-red-600 text-2xl font-bold mb-4">Shopping Online</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Trải nghiệm mua sắm trực tuyến tuyệt vời với hàng nghìn sản phẩm chất lượng từ thời trang,
                            công nghệ đến đồ gia dụng.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Cột 2: Chính sách */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Hỗ trợ khách hàng</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <a href="#" className="hover:text-red-600 transition-colors">
                                    Hướng dẫn mua hàng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600 transition-colors">
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600 transition-colors">
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-red-600 transition-colors">
                                    Vận chuyển & Giao hàng
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3: Liên hệ */}
                    <div>
                        <h3 className="text-gray-800 font-semibold text-lg mb-4">Thông tin liên hệ</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start space-x-3">
                                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>0123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>support@shoppingonline.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>© 2026 Shopping Online. Tất cả các quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
