import { useState, useMemo } from 'react'; // Thêm useMemo để tối ưu tính toán
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import CartService from '../services/cartService';
import Notification from '../components/Notification';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Pay() {
    // Địa chỉ mặc định của Shop - (Phần này có thể xóa nếu không dùng)

    // Done
    const navigate = useNavigate();
    const location = useLocation();
    const { checkoutItems } = location.state || { checkoutItems: [] };
    console.log(checkoutItems);

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        check: false,
    });

    const [addressError, setAddressError] = useState('');
    const [popupOpen, setPopupOpen] = useState(false);

    // Đảm bảo user được lấy ra đúng cách, xử lý trường hợp null
    const user = useMemo(() => {
        const storedUser = localStorage.getItem('user');
        const userOrder = localStorage.getItem('userOrder');
        if (userOrder) return userOrder ? JSON.parse(userOrder) : {};
        else return storedUser ? JSON.parse(storedUser) : {};
    }, []);

    const [addressInfo, setAddressInfo] = useState({
        name: user.realName || '',
        phone: user.numberPhone || '',
        address: user.address || '',
    });
    const [tempAddress, setTempAddress] = useState({ ...addressInfo });

    // Tính tổng tiền hàng bằng useMemo để tối ưu
    const totalOrderAmount = useMemo(() => {
        if (!Array.isArray(checkoutItems)) {
            return checkoutItems.cost * checkoutItems.quantityPurchased;
        }
        return checkoutItems.reduce((sum, item) => {
            const cost = item.cost || 0;
            const qty = item.quantityPurchased || 0;
            return sum + cost * qty;
        }, 0);
    }, [checkoutItems]);

    const handlePay = async () => {
        // 1. Kiểm tra địa chỉ
        const isAddressValid =
            addressInfo.name.trim() !== '' && addressInfo.phone.trim() !== '' && addressInfo.address.trim() !== '';

        if (!isAddressValid) {
            setModalConfig({
                isOpen: true,
                message: 'Hãy điền đầy đủ thông tin địa chỉ!',
                check: false,
            });
            return;
        }
        try {
            let response;

            // Kiểm tra xem checkoutItems có phải là một object (mua ngay) hay mảng (giỏ hàng)
            // Cách an toàn nhất: Kiểm tra xem nó có phải mảng không
            const isCartCheckout = Array.isArray(checkoutItems);

            if (!isCartCheckout || checkoutItems.isDirect) {
                response = await CartService.orderDirect(
                    user.email,
                    checkoutItems.nameProduct || checkoutItems.name, // Kiểm tra kỹ tên field trả về từ API
                    checkoutItems.quantityPurchased,
                );

                setModalConfig({
                    isOpen: true,
                    message: `Đặt hàng thành công! Đơn hàng đang được xử lý.`,
                    check: true,
                });

                setTimeout(() => navigate('/'), 1500);
            } else {
                const listProductName = checkoutItems.map((product) => product.name);

                response = await CartService.orderSomeItemInCart(user.email, listProductName);

                setModalConfig({
                    isOpen: true,
                    message: `Đặt hàng thành công! Đơn hàng đang được xử lý.`,
                    check: true,
                });

                setTimeout(() => navigate('/'), 1500);
            }

            // ... (phần thông báo thành công)
        } catch (error) {
            setModalConfig({
                isOpen: true,
                message: error.response?.data?.message || 'Đặt hàng thất bại. Vui lòng thử lại sau.',
                check: false,
            });
        }
    };

    const handleSaveAddress = () => {
        setAddressError('');

        if (!tempAddress.name.trim() || !tempAddress.phone.trim() || !tempAddress.address.trim()) {
            setAddressError('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        // const vnf_regex = /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b$/;

        // if (!vnf_regex.test(tempAddress.phone)) {
        //     setAddressError('Số điện thoại không đúng định dạng');
        //     return;
        // }

        const newAddressData = {
            realName: tempAddress.name,
            numberPhone: tempAddress.phone,
            address: tempAddress.address,
        };

        setAddressInfo(newAddressData);

        const currentUser = JSON.parse(localStorage.getItem('userOrder')) || {};
        localStorage.setItem('userOrder ', JSON.stringify({ ...currentUser, ...newAddressData }));

        setPopupOpen(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <div className="max-w-[1100px] mx-auto py-8">
                <h2 className="text-3xl mb-6 flex items-center gap-2">
                    <i className="fa-solid fa-cart-shopping text-[30px] text-red-500 mt-1"></i>
                    <span>Thanh Toán</span>
                </h2>

                {/* Địa chỉ nhận hàng (Style Shopee) */}
                <div className="bg-white p-6 rounded-sm shadow-sm border-t-4 border-red-500 mb-4">
                    <div className="flex items-center gap-2 text-red-500 mb-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="font-bold uppercase">Địa chỉ nhận hàng</span>
                    </div>
                    {/* Thay đổi đoạn này trong code của bạn */}
                    <div className="flex gap-2 font-bold text-gray-800">
                        <span>
                            {addressInfo.name} - {addressInfo.phone}
                        </span>
                        <span className="font-normal">- {addressInfo.address}</span>
                        <span
                            onClick={() => {
                                setTempAddress({ ...addressInfo }); // Reset input về giá trị hiện tại
                                setPopupOpen(true);
                            }}
                            className="text-blue-500 text-sm font-normal cursor-pointer ml-auto hover:underline"
                        >
                            Thay đổi
                        </span>
                    </div>
                </div>

                {/* Danh sách sản phẩm - Cấu trúc lại để giống ảnh ví dụ hơn */}
                <div className="bg-white rounded-sm shadow-sm mb-4">
                    <div className="p-4 border-b flex items-center justify-between">
                        <span className="text-lg font-medium">Sản phẩm</span>
                        {/* Ẩn bớt tiêu đề cột để dồn thông tin sang trái giống ảnh */}
                        <div className="flex gap-20 text-gray-500 text-sm mr-4 invisible">
                            <span>Đơn giá</span>
                            <span>Số lượng</span>
                            <span>Thành tiền</span>
                        </div>
                    </div>

                    {Array.isArray(checkoutItems) ? (
                        checkoutItems.map((item, index) => (
                            <div key={index} className="flex p-6 border-b last:border-0 gap-6">
                                <div className="w-40 h-40 flex-shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover border rounded-sm"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-2 text-left">
                                    <h3 className="text-2xl font-semibold line-clamp-2 text-gray-800">{item.name}</h3>

                                    <div className="flex items-center gap-4 text-xs text-green-600">
                                        <span className="flex items-center gap-1">
                                            <i className="fa-solid fa-shield-halved"></i> Hoàn trả sản phẩm trong 1 tuần
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-xs text-green-600">
                                        <span className="flex items-center gap-1">
                                            <i className="fa-solid fa-shield-halved"></i> Bảo hành 12 tháng
                                        </span>
                                    </div>

                                    <div className="mt-2 flex flex-col gap-1">
                                        <div className="text-sm text-gray-600">
                                            Đơn giá: {item.cost?.toLocaleString('vi-VN')}₫
                                        </div>

                                        <div className="text-sm text-gray-600">
                                            Số lượng: <span className="font-medium">{item.quantityPurchased}</span>
                                        </div>

                                        <div className="text-lg font-bold text-red-500 mt-1 pt-1 border-t border-dashed border-gray-200">
                                            Thành tiền: {(item.cost * item.quantityPurchased).toLocaleString('vi-VN')}₫
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex p-6 border-b last:border-0 gap-6">
                            {/* Ảnh to bên trái - Giữ nguyên hoặc điều chỉnh kích thước nếu cần */}
                            <div className="w-40 h-40 flex-shrink-0">
                                <img
                                    src={checkoutItems.img}
                                    alt={checkoutItems.name}
                                    className="w-full h-full object-cover border rounded-sm"
                                />
                            </div>

                            {/* Thông tin bên phải - CĂN CHỈNH SANG TRÁI (text-left) */}
                            <div className="flex-1 flex flex-col gap-2 text-left">
                                {/* Tên sản phẩm - To hơn và đậm hơn */}
                                <h3 className="text-2xl font-semibold line-clamp-2 text-gray-800">
                                    {checkoutItems.name}
                                </h3>

                                {/* Thông tin bảo hành - Giữ nguyên hoặc ẩn đi tùy nhu cầu */}
                                <div className="flex items-center gap-4 text-xs text-green-600">
                                    <span className="flex items-center gap-1">
                                        <i className="fa-solid fa-shield-halved"></i> Hoàn trả sản phẩm trong 1 tuần
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-green-600">
                                    <span className="flex items-center gap-1">
                                        <i className="fa-solid fa-shield-halved"></i> Bảo hành 12 tháng
                                    </span>
                                </div>

                                {/* Khối Giá và Số lượng - Sắp xếp lại giống ảnh */}
                                <div className="mt-2 flex flex-col gap-1">
                                    {/* Giá tiền của 1 sản phẩm */}
                                    <div className="text-sm text-gray-600">
                                        Đơn giá: {checkoutItems.cost?.toLocaleString('vi-VN')}₫
                                    </div>

                                    {/* Số lượng mua */}
                                    <div className="text-sm text-gray-600">
                                        Số lượng: <span className="font-medium">{checkoutItems.quantityPurchased}</span>
                                    </div>

                                    {/* Thành tiền của sản phẩm này - Làm nổi bật */}
                                    <div className="text-lg font-bold text-red-500 mt-1 pt-1 border-t border-dashed border-gray-200">
                                        Thành tiền:{' '}
                                        {(checkoutItems.cost * checkoutItems.quantityPurchased).toLocaleString('vi-VN')}
                                        ₫
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tổng kết và Đặt hàng */}
                <div className="bg-white p-6 shadow-sm border-t border-dashed">
                    <div className="flex justify-end gap-10 mb-4">
                        <span className="text-gray-500">Tổng tiền hàng:</span>
                        {/* Sử dụng totalOrderAmount thay vì checkoutItems.cost */}
                        <span className="w-40 text-left font-medium">{totalOrderAmount.toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div className="flex justify-end gap-10 mb-4">
                        <span className="text-gray-500">Phí vận chuyển:</span>
                        {/* Giả định phí vận chuyển */}
                        <span className="w-40 text-left font-medium">30.000₫</span>
                    </div>
                    <div className="flex justify-end gap-10 items-center mb-6">
                        <span className="text-gray-500 text-lg">Tổng thanh toán:</span>
                        {/* Cộng thêm phí vận chuyển giả định */}
                        <span className="w-40 text-left text-3xl text-red-500 font-bold">
                            {(totalOrderAmount + 30000).toLocaleString('vi-VN')}₫
                        </span>
                    </div>
                    <hr className="mb-6 border-gray-100" />
                    <div className="flex justify-end">
                        <button
                            onClick={handlePay}
                            className="bg-red-500 text-white px-16 py-3 rounded-sm text-lg font-medium hover:bg-red-600 shadow-md cursor-pointer"
                        >
                            Đặt hàng
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Thay đổi địa chỉ (Giữ nguyên) */}
            {popupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        onClick={() => setPopupOpen(false)}
                    ></div>

                    <div className="relative bg-white w-full max-w-[500px] p-8 rounded-sm shadow-2xl mx-4">
                        <h3 className="text-xl font-medium mb-6 text-gray-800">Cập nhật địa chỉ nhận hàng</h3>

                        <div className="space-y-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Họ tên"
                                    className="w-full border border-gray-300 p-3 outline-none focus:border-red-500 focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075)] transition-all"
                                    value={tempAddress.name}
                                    onChange={(e) => setTempAddress({ ...tempAddress, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    className="w-full border border-gray-300 p-3 outline-none focus:border-red-500 transition-all"
                                    value={tempAddress.phone}
                                    onChange={(e) => setTempAddress({ ...tempAddress, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Địa chỉ chi tiết "
                                    className="w-full border border-gray-300 p-3 outline-none focus:border-red-500 transition-all h-28 resize-none"
                                    value={tempAddress.address}
                                    onChange={(e) => setTempAddress({ ...tempAddress, address: e.target.value })}
                                />
                            </div>
                            <div className="space-y-5">
                                {addressError && <p className="text-red-500 text-sm ">⚠️ {addressError}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-10">
                            <button
                                onClick={() => setPopupOpen(false)}
                                className="px-10 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                Trở Lại
                            </button>
                            <button
                                onClick={handleSaveAddress}
                                className="px-10 py-2.5 bg-[#ee4d2d] text-white hover:bg-[#d73211] shadow-sm transition-colors"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Các sản phẩm khác */}
            <div className="mt-10">
                <h1 className="ml-[130px] text-[25px]">Các sản phẩm khác </h1>
                <ProductList />
            </div>

            <Footer />
            <Notification
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                check={modalConfig.check} // Truyền prop check
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
            />
        </div>
    );
}

export default Pay;
