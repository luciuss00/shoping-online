import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import CartService from '../services/cartService'; //
import Notification from '../components/Notification/Notification';

function Cart() {
    const { cartProducts, refreshCart } = useCart(); //
    const [selectedIds, setSelectedIds] = useState([]);

    const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });

    const showModal = (msg) => {
        setModalConfig({ isOpen: true, message: msg });
    };

    const closeModal = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const handleCheckItem = (id) => {
        setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    };

    const handleCheckAll = () => {
        if (selectedIds.length === cartProducts.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(cartProducts.map((_, idx) => idx)); // Dùng index làm ID tạm thời
        }
    };

    const groupedCart = cartProducts.reduce((acc, current) => {
        const existingProduct = acc.find((item) => item.nameProduct === current.nameProduct);
        if (existingProduct) {
            // Nếu đã tồn tại, tăng thuộc tính số lượng (giả sử là cartQuantity)
            existingProduct.displayQuantity = (existingProduct.displayQuantity || 1) + 1;
        } else {
            // Nếu chưa có, thêm mới vào mảng tạm và gán số lượng hiển thị là 1
            acc.push({ ...current, displayQuantity: 1 });
        }
        return acc;
    }, []);

    const totalPrice = useMemo(() => {
        return groupedCart
            .filter((_, idx) => selectedIds.includes(idx))
            .reduce((total, item) => total + Number(item.priceProduct) * item.displayQuantity, 0);
    }, [groupedCart, selectedIds]);

    const handleDelete = async (product) => {
        const user = JSON.parse(localStorage.getItem('user'));

        try {
            if (product) {
                // Trường hợp 1: Xóa một sản phẩm cụ thể (bấm nút Xóa ở dòng đó)
                await CartService.removeToCart(user.email, product.nameProduct);
            } else {
                // Trường hợp 2: Xóa nhiều sản phẩm đã tick
                // Lấy danh sách tên các sản phẩm dựa trên mảng selectedIds (đang lưu index)
                const productsToDelete = cartProducts.filter((_, idx) => selectedIds.includes(idx));

                // Sử dụng Promise.all để chạy song song các request xóa (tối ưu hiệu năng)
                await Promise.all(
                    productsToDelete.map((product) => CartService.removeToCart(user.email, product.nameProduct)),
                );

                // Sau khi xóa nhiều, reset lại mảng chọn
                setSelectedIds([]);
            }

            showModal('Đã cập nhật giỏ hàng thành công!');
            if (refreshCart) refreshCart();
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
            showModal('Có lỗi xảy ra. Vui lòng thử lại!');
        }
    };

    const handleUpdateQuantity = async (product, change) => {
        const newQuantity = product.displayQuantity + change;

        if (newQuantity < 1) {
            showModal('Số lượng tối thiểu là 1!');
            return;
        }

        // Giả sử bạn có Service xử lý tăng giảm
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            // Gọi API cập nhật số lượng
            await CartService.updateQuantity(user.email, product.nameProduct, newQuantity);

            if (refreshCart) refreshCart(); // Load lại data mới từ server
        } catch (error) {
            console.error('Lỗi cập nhật số lượng:', error);
            showModal('Không thể cập nhật số lượng!');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Header />
            <div className="max-w-[1200px] mx-auto mt-6">
                {/* Header Table */}
                <div className="grid grid-cols-12 bg-white p-4 shadow-sm rounded-sm text-gray-500 text-sm mb-4 sticky top-0 z-10">
                    <div className="col-span-5 flex items-center gap-4 ml-8">
                        <span>Sản Phẩm</span>
                    </div>
                    <div className="col-span-2 text-center">Đơn Giá</div>
                    <div className="col-span-2 text-center">Số Lượng</div>
                    <div className="col-span-2 text-center">Số Tiền</div>
                    <div className="col-span-1 text-center">Thao Tác</div>
                </div>

                {/* List Products */}
                <div className="bg-white shadow-sm rounded-sm">
                    {groupedCart.length === 0 ? (
                        <div className="text-center py-20">Giỏ hàng trống.</div>
                    ) : (
                        groupedCart.map((product, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-12 items-center p-4 border-b border-gray-100 ${selectedIds.includes(idx) ? 'bg-orange-50/30' : ''}`}
                            >
                                {/* Cột Sản Phẩm */}
                                <div className="col-span-5 flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-orange-500 cursor-pointer"
                                        checked={selectedIds.includes(idx)}
                                        onChange={() => handleCheckItem(idx)}
                                    />
                                    <Link
                                        to={`/detail?name=${encodeURIComponent(product.nameProduct)}`}
                                        state={{
                                            id: product.id,
                                            name: product.nameProduct,
                                            description: product.descriptionProduct,
                                            type: product.categoryProduct,
                                            cost: product.priceProduct,
                                            quantity: product.quantity,
                                            img: product.imageLink,
                                        }}
                                        className="flex"
                                    >
                                        <img
                                            src={product.imageLink}
                                            className="w-20 h-20 object-cover border border-gray-200"
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-center ml-4">
                                            <span className="text-sm font-medium line-clamp-2">
                                                {product.nameProduct}
                                            </span>
                                            {/* Thêm chữ số lượng ở đây */}
                                            <span className="text-xs text-gray-400 mt-1">
                                                Số lượng: {product.displayQuantity}
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-span-2 text-center text-sm">
                                    {Number(product.priceProduct).toLocaleString()}₫
                                </div>

                                {/* Cột Số Lượng có dấu + - */}
                                <div className="col-span-2 text-center">
                                    <div className="flex items-center justify-center border border-gray-200 w-fit mx-auto rounded-sm">
                                        <button
                                            onClick={() => handleUpdateQuantity(product, -1)}
                                            className="px-3 py-1 border-r border-gray-200 hover:bg-gray-100"
                                        >
                                            -
                                        </button>
                                        {/* Hiển thị displayQuantity của riêng sản phẩm này */}
                                        <div className="px-4 py-1 text-sm min-w-[40px]">{product.displayQuantity}</div>
                                        <button
                                            onClick={() => handleUpdateQuantity(product, 1)}
                                            className="px-3 py-1 border-l border-gray-200 hover:bg-gray-100"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-2 text-center text-orange-500 font-medium">
                                    {(product.priceProduct * product.displayQuantity).toLocaleString()}₫
                                </div>

                                <div className="col-span-1 text-center text-sm">
                                    <button onClick={() => handleDelete(product)} className="hover:text-orange-500">
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-5px_10px_rgba(0,0,0,0.05)]">
                    <div className="max-w-[1200px] mx-auto p-4 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-orange-500"
                                    onChange={handleCheckAll}
                                    checked={selectedIds.length === cartProducts.length && cartProducts.length > 0}
                                />
                                <span className="text-sm">Chọn tất cả ({cartProducts.length})</span>
                            </div>

                            {/* Nút xóa hiện lên khi có tick [Yêu cầu của bạn] */}
                            {selectedIds.length > 0 && (
                                <button
                                    onClick={() => handleDelete()}
                                    className="text-red-500 hover:underline text-sm font-medium"
                                >
                                    Xóa mục đã chọn ({selectedIds.length})
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="text-right">
                                <span className="text-sm mr-2">Tổng thanh toán ({selectedIds.length} sản phẩm):</span>
                                <span className="text-2xl text-orange-600 font-bold">
                                    {totalPrice.toLocaleString()}₫
                                </span>
                            </div>
                            <button
                                className={`px-12 py-3 rounded-sm font-medium transition-colors ${
                                    selectedIds.length > 0
                                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Mua Hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Notification isOpen={modalConfig.isOpen} message={modalConfig.message} onClose={closeModal} />
        </div>
    );
}

export default Cart;
