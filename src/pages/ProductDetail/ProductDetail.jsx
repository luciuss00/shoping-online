import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; //
import Header from '../../components/Header';
import CartService from '../../services/cartService';
import Footer from '../../components/Footer';
import Notification from '../../components/Notification';

function ProductDetail() {
    const navigate = useNavigate();
    const { cartProducts, refreshCart } = useCart();
    const location = useLocation();
    const product = location.state;

    const [quantityPurchased, setQuantityPurchased] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const [ratingData, setRatingData] = useState({ stars: 5, reviews: 0 });

    useEffect(() => {
        if (product?.id) {
            const storageKey = `product_rating_${product.id}`;
            const savedData = localStorage.getItem(storageKey);

            if (savedData) {
                setRatingData(JSON.parse(savedData));
            } else {
                const newStars = Math.floor(Math.random() * 2) + 3;
                const newReviews = Math.floor(Math.random() * 400) + 50;
                const newData = { stars: newStars, reviews: newReviews };

                localStorage.setItem(storageKey, JSON.stringify(newData));
                setRatingData(newData);
            }
        }
    }, [product?.id]);

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        isSuccess: false, // Thêm field quản lý trạng thái
    });

    const showModal = (msg, success = false) => {
        setModalConfig({ isOpen: true, message: msg, isSuccess: success });
    };

    const closeModal = () => {
        setModalConfig({ ...modalConfig, isOpen: false });
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setQuantityPurchased(value);
        }
    };

    const handleAddToCart = async () => {
        try {
            const quantityToAdd = parseInt(quantityPurchased, 10);

            const userStore = localStorage.getItem('user');
            if (!userStore) {
                showModal('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng', false);
                return;
            }
            const user = JSON.parse(userStore);

            // 1. Kiểm tra nhập liệu cơ bản
            if (isNaN(quantityToAdd) || quantityToAdd <= 0) {
                showModal('Vui lòng nhập số lượng sản phẩm hợp lệ', false);
                return;
            }

            // 2. Kiểm tra đăng nhập

            // 3. LOGIC KIỂM TRA TỔNG SỐ LƯỢNG VỚI KHO
            // Tìm sản phẩm này trong giỏ hàng hiện tại
            const productInCart = cartProducts.find((item) => item.nameProduct === product.name);

            // Số lượng hiện có trong giỏ (nếu chưa có thì là 0)
            const currentCartQuantity = productInCart ? productInCart.quantity : 0;

            // Tổng số lượng sau khi thêm
            const totalAfterAdding = currentCartQuantity + quantityToAdd;

            if (totalAfterAdding > product.quantity) {
                if (currentCartQuantity > 0) {
                    showModal(
                        `Bạn đã có ${currentCartQuantity} sản phẩm trong giỏ. Không thể thêm ${quantityToAdd} vì vượt quá số lượng kho (${product.quantity})`,
                        false,
                    );
                } else {
                    showModal(`Rất tiếc, chỉ còn ${product.quantity} sản phẩm trong kho`, false);
                }
                return;
            }

            // 4. Gọi API thêm vào giỏ
            await CartService.addToCart(user.email, product.name, quantityToAdd);
            await refreshCart();
            setQuantityPurchased('');

            showModal('Đã thêm vào giỏ hàng thành công!', true);
        } catch (error) {
            showModal('Có lỗi xảy ra. Vui lòng thử lại sau.', false);
            console.log(error);
        }
    };

    const handleBuyNow = () => {
        const userStore = localStorage.getItem('user');
        if (!userStore) {
            showModal('Vui lòng đăng nhập để mua hàng', false); // Thất bại
            return;
        }

        if (!quantityPurchased || quantityPurchased <= 0) {
            showModal('Vui lòng nhập số lượng sản phẩm hợp lệ', false); // Thất bại
            return;
        }

        if (Number(quantityPurchased) > product.quantity) {
            showModal(`Rất tiếc, chỉ còn ${product.quantity} sản phẩm trong kho`, false); // Thất bại
            return;
        }

        navigate('/pay', {
            state: {
                checkoutItems: [
                    {
                        ...product,
                        quantityPurchased: Number(quantityPurchased),
                    },
                ],
            },
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="max-w-[1200px] h-[630px] mx-auto mt-10 bg-white pt-3 px-6">
                <h1 className="text-center text-[30px] my-3 text-red-500">Thông tin chi tiết sản phẩm</h1>
                <div className=" flex gap-10">
                    <div className="w-[450px] h-[450px] mt-4">
                        <div className="border">
                            <img src={product.img} alt="" className="w-full object-cover" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h1 className="text-[26px] font-semibold">{product.name}</h1>

                        <div className="flex items-center gap-4 mt-2 text-sm">
                            <span className="text-yellow-500">
                                {'★'.repeat(ratingData.stars)}
                                {'☆'.repeat(5 - ratingData.stars)}
                            </span>
                            <span className="text-gray-500">{ratingData.reviews} Đánh giá</span>
                        </div>

                        <p className="mt-2 text-[14px] text-gray-500">
                            Thể loại: <span>{product.type}</span>
                        </p>

                        <div className="mt-2 text-[14px] text-gray-500 ">
                            <div>
                                <p>Mô tả: </p>
                                <span className={`text-gray-700 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                                    {product.description}
                                </span>
                            </div>

                            {/* Nút Xem thêm / Rút gọn */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-blue-500 cursor-pointer mt-1 hover:underline text-[13px] font-medium transition-all"
                            >
                                {isExpanded ? 'Thu gọn' : 'Xem thêm'}
                            </button>
                        </div>

                        {/* PRICE */}
                        <h1 className="mt-2 font-bold text-[24px]">GIÁ: </h1>
                        <div className="bg-gray-100 p-4">
                            <span className="text-red-500 text-[32px] font-bold">
                                {Number(product.cost).toLocaleString('vi-VN')}₫
                            </span>
                        </div>

                        <p className="mt-2 text-[14px] text-gray-500">
                            Kho còn: <span>{product.quantity} </span>
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            <span>Số lượng mua: </span>

                            <input
                                value={quantityPurchased}
                                onChange={handleInputChange}
                                type="text"
                                className="mt-[2px] text-center w-[30px] border-1 border-gray-500   "
                            />
                        </div>

                        {/* BUTTON */}
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={handleAddToCart}
                                className="border border-red-500 text-red-500 px-6 py-3 cursor-pointer hover:bg-red-100"
                            >
                                Thêm Vào Giỏ Hàng
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="bg-red-500 text-white px-8 py-3 hover:bg-red-600 cursor-pointer"
                            >
                                Mua Ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Notification
                isOpen={modalConfig.isOpen}
                message={modalConfig.message}
                onClose={closeModal}
                check={modalConfig.isSuccess}
            />
        </div>
    );
}

export default ProductDetail;
