import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import Header from '../components/Header';
import Notification from '../components/Notification';
import CartService from '../services/cartService';

function Cart() {
    const navigate = useNavigate();
    const { products } = useProducts();
    const { cartProducts, fetchCart } = useCart();
    const [localCart, setLocalCart] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        check: false,
    });
    // Đồng bộ localCart với dữ liệu từ Context
    useEffect(() => {
        if (cartProducts) {
            setLocalCart(cartProducts);
        }
    }, [cartProducts]);

    // TÍNH TỔNG TIỀN: Đơn giá * Số lượng
    const totalPrice = useMemo(() => {
        return selectedIds.reduce((sum, idx) => {
            const product = localCart[idx];
            // Sử dụng trực tiếp product.quantity
            return sum + (product ? product.priceProduct * product.quantityProduct : 0);
        }, 0);
    }, [selectedIds, localCart]);

    const handleCheckout = () => {
        const itemsToPay = selectedIds.map((idx) => {
            const item = localCart[idx];
            console.log(item);
            return {
                id: item.id,
                name: item.nameProduct,
                cost: item.priceProduct,
                quantityPurchased: item.quantityProduct, // Lấy trực tiếp số lượng trong giỏ
                img: item.imageLink,
                descriptionProduct: item.descriptionProduct,
                categoryProduct: item.categoryProduct,
                subCategoryProduct: item.subCategoryProduct,
            };
        });

        if (itemsToPay.length > 0) {
            navigate('/pay', { state: { checkoutItems: itemsToPay } });
        } else {
            setModalConfig({
                isOpen: true,
                message: 'Vui lòng chọn ít nhất một sản phẩm để thanh toán!',
                isSuccess: false,
            });
        }
    };

    const handleDelete = async (nameProduct) => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            setModalConfig({
                isOpen: true,
                message: 'Vui lòng đăng nhập để thực hiện thao tác này!',
                check: false,
            });
            return;
        }

        if (window.confirm(`Bạn có chắc muốn xóa "${nameProduct}" khỏi giỏ hàng?`)) {
            try {
                await CartService.removeToCart(user.email, nameProduct);

                // Cập nhật UI tại chỗ
                setLocalCart((prev) => prev.filter((item) => item.nameProduct !== nameProduct));
                setSelectedIds([]);

                // 3. Gọi hàm refresh từ Context để icon giỏ hàng trên Header cập nhật lại số lượng
                if (fetchCart) {
                    await fetchCart(user.email);
                }

                // Thông báo thành công
                setModalConfig({
                    isOpen: true,
                    message: 'Đã xóa sản phẩm khỏi giỏ hàng!',
                    check: true, // Thành công là true
                });
            } catch (error) {
                console.error('Lỗi khi xóa sản phẩm:', error);
                // Thông báo thất bại
                setModalConfig({
                    isOpen: true,
                    message: 'Xóa sản phẩm thất bại. Vui lòng thử lại!',
                    check: false, // Thất bại là false
                });
            }
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Header />
            <div className="max-w-[1200px] mx-auto mt-6">
                <div className="grid grid-cols-12 bg-white p-4 shadow-sm rounded-sm text-gray-500 text-sm mb-4">
                    <div className="col-span-5 ml-8">Sản Phẩm</div>
                    <div className="col-span-2 text-center">Đơn Giá</div>
                    <div className="col-span-2 text-center">Số Lượng</div>
                    <div className="col-span-2 text-center">Số Tiền</div>
                    <div className="col-span-1 text-center">Thao Tác</div>
                </div>

                <div className="bg-white shadow-sm rounded-sm">
                    {localCart.map((product, idx) => {
                        // 1. Tìm sản phẩm gốc trong kho để lấy số lượng thực tế
                        // Giả sử mỗi sản phẩm có trường 'id' hoặc 'nameProduct' để định danh
                        const stockProduct = products.find((p) => p.nameProduct === product.nameProduct);

                        // 2. Lấy số lượng từ kho, nếu không tìm thấy thì fallback về số lượng trong giỏ
                        const actualStock = stockProduct ? stockProduct.quantityProduct : product.quantityProduct;

                        return (
                            <div
                                key={idx}
                                className={`grid grid-cols-12 items-center p-4 border-b border-gray-100 ${selectedIds.includes(idx) ? 'bg-red-50/30' : ''}`}
                            >
                                <div className="col-span-5 flex items-center gap-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(idx)}
                                        onChange={() =>
                                            setSelectedIds((prev) =>
                                                prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
                                            )
                                        }
                                        className="w-4 h-4 accent-red-500 cursor-pointer"
                                    />
                                    <Link
                                        to={`/detail?name=${product.nameProduct}`}
                                        state={{
                                            cost: product.priceProduct,
                                            description: product.descriptionProduct,
                                            img: product.imageLink,
                                            name: product.nameProduct,
                                            // DÙNG SỐ LƯỢNG KHO THỰC TẾ Ở ĐÂY
                                            quantity: actualStock,
                                            type: product.categoryProduct,
                                        }}
                                        className="flex items-center"
                                    >
                                        <img src={product.imageLink} className="w-20 h-20 object-cover border" alt="" />
                                        <div className="ml-4">
                                            <p className="text-sm font-medium line-clamp-2">{product.nameProduct}</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-span-2 text-center">
                                    {Number(product.priceProduct).toLocaleString()}₫
                                </div>

                                <div className="col-span-2 text-center">
                                    {/* Ở đây hiển thị số lượng người dùng ĐÃ CHỌN trong giỏ hàng */}
                                    <div className="flex items-center justify-center w-fit mx-auto">
                                        {product.quantityProduct}
                                    </div>
                                </div>

                                <div className="col-span-2 text-center text-red-500 font-medium">
                                    {(product.priceProduct * product.quantityProduct).toLocaleString()}₫
                                </div>

                                <div className="col-span-1 text-center">
                                    <button
                                        onClick={() => handleDelete(product.nameProduct)}
                                        className="text-sm text-gray-400 hover:underline cursor-pointer hover:text-red-500 transition-colors"
                                    >
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md z-10">
                    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                checked={selectedIds.length === localCart.length && localCart.length > 0}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedIds(localCart.map((_, i) => i));
                                    } else {
                                        setSelectedIds([]);
                                    }
                                }}
                                className="w-4 h-4 accent-red-500 cursor-pointer"
                            />
                            <span className="text-sm">Chọn tất cả ({localCart.length})</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-sm">Tổng thanh toán ({selectedIds.length} sản phẩm): </span>
                                <span className="text-2xl text-red-600 font-bold">{totalPrice.toLocaleString()}₫</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                className={`px-12 py-3 rounded-sm font-medium transition-colors ${
                                    selectedIds.length > 0
                                        ? 'bg-red-600 text-white hover:bg-red-700 cursor-pointer'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                                disabled={selectedIds.length === 0}
                            >
                                Mua Hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Notification
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                check={modalConfig.check} // Sử dụng đúng prop check từ state
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
            />
        </div>
    );
}

export default Cart;
