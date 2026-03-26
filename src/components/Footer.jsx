import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    // Danh sách icon thanh toán giả định để làm đẹp
    const paymentMethods = [
        'fa-brands fa-cc-visa',
        'fa-brands fa-cc-mastercard',
        'fa-solid fa-money-bill-1-wave', // Trả tiền mặt
        'fa-solid fa-building-columns', // Chuyển khoản
    ];

    return (
        // Tăng padding top/bottom để thoáng hơn, dùng bg-white cho sạch
        <footer className="bg-gray-100 border-t border-gray-300 mt-16 text-[14px]">
            <div className="max-w-[1440px] mx-auto px-[130px] pt-14 pb-4">
                {/* Bố cục 5 cột chuyên nghiệp */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-gray-700">
                    {/* Cột 1: Thương hiệu và Giới thiệu ngắn */}
                    <div className="md:col-span-1">
                        <h2 className="text-red-600 text-3xl font-extrabold mb-5 tracking-tight">Shopping Online</h2>
                        <p className="text-gray-500 leading-relaxed mb-6 text-[13px]">
                            Trải nghiệm mua sắm trực tuyến tuyệt vời với hàng nghìn sản phẩm chất lượng từ thời trang,
                            công nghệ đến đồ gia dụng.
                        </p>
                        {/* Social Links đậm nét hơn */}
                        <div className="flex space-x-5 mt-4">
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-xl">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-xl">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-xl">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    {/* Cột 2: Hỗ trợ khách hàng (Thêm các link phổ biến) */}
                    <div>
                        <h3 className="text-gray-900 font-semibold uppercase tracking-wider mb-5 text-[15px]">
                            Hỗ trợ
                        </h3>
                        <ul className="space-y-3 text-gray-600 [&>li>a]:hover:text-red-600 [&>li>a]:transition-colors">
                            <li>
                                <a href="/help" target="_blank">
                                    Trung tâm trợ giúp
                                </a>
                            </li>
                            <li>
                                <a href="/purchase-guide" target="_blank">
                                    Hướng dẫn mua hàng
                                </a>
                            </li>
                            <li>
                                <a href="/warranty-policy" target="_blank">
                                    Chính sách bảo hành
                                </a>
                            </li>
                            <li>
                                <a href="/return-policy" target="_blank">
                                    Chính sách đổi trả
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    Vận chuyển & Giao hàng
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 3: Về chúng tôi */}
                    <div>
                        <h3 className="text-gray-900 font-semibold uppercase tracking-wider mb-5 text-[15px]">
                            Về Chúng Tôi
                        </h3>
                        <ul className="space-y-3 text-gray-600 [&>li>a]:hover:text-red-600 [&>li>a]:transition-colors">
                            <li>
                                <a href="#">Giới thiệu công ty</a>
                            </li>
                            <li>
                                <a href="#">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="#">Điều khoản sử dụng</a>
                            </li>
                            <li>
                                <a href="#">Chính sách bảo mật</a>
                            </li>
                            <li>
                                <a href="#">Đối tác</a>
                            </li>
                        </ul>
                    </div>

                    {/* Cột 4: Phương thức thanh toán (Thêm phần này để chuyên nghiệp) */}
                    <div>
                        <h3 className="text-gray-900 font-semibold uppercase tracking-wider mb-5 text-[15px]">
                            Thanh toán
                        </h3>
                        <div className="grid grid-cols-2 gap-1">
                            {paymentMethods.map((icon, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-md p-3 text-2xl text-gray-500 hover:border-red-200 hover:text-red-500 transition-all cursor-pointer"
                                >
                                    <i className={icon}></i>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cột 5: Liên hệ (Tăng cường icon trực quan) */}
                    <div>
                        <h3 className="text-gray-900 font-semibold uppercase tracking-wider mb-5 text-[15px]">
                            Liên hệ
                        </h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start space-x-3.5">
                                <i className="fa-solid fa-location-dot mt-1 text-red-500 w-4 h-4 text-center"></i>
                                <span className="leading-relaxed">Bắc Cực</span>
                            </li>
                            <li className="flex items-center space-x-3.5">
                                <i className="fa-solid fa-phone text-red-500 w-4 h-4 text-center"></i>
                                <span>0123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-3.5">
                                <i className="fa-solid fa-envelope text-red-500 w-4 h-4 text-center"></i>
                                <span>support@shoppingonline.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Phần bản quyền - Đơn giản và tinh tế hơn */}
                <div className="border-t border-gray-200 mt-4 pt-4 text-center text-gray-400 text-[13px]">
                    <p>© 2026 Shopping Online. Tất cả các quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
