import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import CartService from '../services/cartService';
import Notification from '../components/Notification';

function Cart() {
    const { cartProducts } = useCart();
    const [localCart, setLocalCart] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '', isSuccess: false });

    useEffect(() => {
        if (cartProducts) {
            // Khởi tạo purchaseQty bằng 1 hoặc số lượng mặc định từ giỏ hàng nếu có
            const updatedCart = cartProducts.map((item) => ({
                ...item,
                purchaseQty: item.purchaseQty || 1, // Mặc định là 1 nếu chưa có
            }));
            setLocalCart(updatedCart);
        }
    }, [cartProducts]);

    const totalPrice = useMemo(() => {
        return selectedIds.reduce((sum, idx) => {
            const product = localCart[idx];
            return sum + (product ? product.priceProduct * product.purchaseQty : 0);
        }, 0);
    }, [selectedIds, localCart]);

    // Xử lý khi nhấn nút + hoặc -
    const handleUpdateQuantity = (idx, change) => {
        const newCart = [...localCart];
        const product = newCart[idx];
        const nextQty = product.purchaseQty + change;

        if (nextQty < 1) return;
        if (nextQty > product.quantity) {
            showModal(`Chỉ có ${product.quantity} sản phẩm trong giỏ!`);
            return;
        }

        newCart[idx].purchaseQty = nextQty;
        setLocalCart(newCart);
    };

    // Xử lý khi người dùng TỰ NHẬP vào ô input
    const handleInputChange = (idx, value) => {
        const newCart = [...localCart];
        const product = newCart[idx];

        // Chỉ cho phép nhập số
        const val = value.replace(/\D/g, '');
        if (val === '') {
            newCart[idx].purchaseQty = ''; // Tạm thời để trống cho người dùng nhập
        } else {
            let num = parseInt(val);
            if (num > product.quantity) num = product.quantity;
            newCart[idx].purchaseQty = num;
        }
        setLocalCart(newCart);
    };

    // Xử lý khi người dùng rời khỏi ô input (onBlur) để đảm bảo không để trống/về 0
    const handleInputBlur = (idx) => {
        const newCart = [...localCart];
        if (newCart[idx].purchaseQty === '' || newCart[idx].purchaseQty < 1) {
            newCart[idx].purchaseQty = 1;
            setLocalCart(newCart);
        }
    };

    const showModal = (msg, success = false) => setModalConfig({ isOpen: true, message: msg, isSuccess: success });
    const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Header />
            <div className="max-w-[1200px] mx-auto mt-6">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-white p-4 shadow-sm rounded-sm text-gray-500 text-sm mb-4">
                    <div className="col-span-5 ml-8">Sản Phẩm</div>
                    <div className="col-span-2 text-center">Đơn Giá</div>
                    <div className="col-span-2 text-center">Số Lượng</div>
                    <div className="col-span-2 text-center">Số Tiền</div>
                    <div className="col-span-1 text-center">Thao Tác</div>
                </div>

                <div className="bg-white shadow-sm rounded-sm">
                    {localCart.map((product, idx) => (
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
                                    className="w-4 h-4 accent-red-500"
                                />
                                <Link to={`/detail?name=${product.nameProduct}`} className="flex items-center">
                                    <img src={product.imageLink} className="w-20 h-20 object-cover border" alt="" />
                                    <div className="ml-4">
                                        <p className="text-sm font-medium line-clamp-2">{product.nameProduct}</p>
                                        <p className="text-xs text-gray-400 mt-1">Số lượng: {product.quantity}</p>
                                    </div>
                                </Link>
                            </div>

                            <div className="col-span-2 text-center">
                                {Number(product.priceProduct).toLocaleString()}₫
                            </div>

                            {/* Cột Số Lượng có Input nhập được */}
                            <div className="col-span-2 text-center">
                                <div className="flex items-center justify-center border border-gray-300 w-fit mx-auto rounded-sm">
                                    <button
                                        onClick={() => handleUpdateQuantity(idx, -1)}
                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 border-r"
                                    >
                                        -
                                    </button>

                                    <input
                                        type="text"
                                        value={product.purchaseQty}
                                        onChange={(e) => handleInputChange(idx, e.target.value)}
                                        onBlur={() => handleInputBlur(idx)}
                                        className="w-12 text-center text-sm outline-none"
                                    />

                                    <button
                                        onClick={() => handleUpdateQuantity(idx, 1)}
                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 border-l"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-2 text-center text-red-500 font-medium">
                                {(product.priceProduct * product.purchaseQty).toLocaleString()}₫
                            </div>

                            <div className="col-span-1 text-center">
                                <button className="text-sm hover:text-red-500">Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md">
                    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                        <span className="text-sm">Chọn tất cả ({localCart.length})</span>
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-sm">Tổng thanh toán: </span>
                                <span className="text-2xl text-red-600 font-bold">{totalPrice.toLocaleString()}₫</span>
                            </div>
                            <button className="bg-red-600 text-white px-10 py-3 rounded-sm hover:bg-red-700">
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
