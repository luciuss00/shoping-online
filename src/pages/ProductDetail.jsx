import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; //
import Header from '../components/Header';
import CartService from '../services/cartService';
import Footer from '../components/Footer';
import Notification from '../components/Notification/Notification';

function ProductDetail() {
    const { refreshCart } = useCart();

    const location = useLocation();
    const product = location.state;

    const [quantityPurchased, setQuantityPurchased] = useState();
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

    const [modalConfig, setModalConfig] = useState({ isOpen: false, message: '' });

    const showModal = (msg) => {
        setModalConfig({ isOpen: true, message: msg });
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
            if (!quantityPurchased || quantityPurchased <= 0) {
                showModal('Vui lòng nhập số lượng sản phẩm hợp lệ'); // Thay alert
                return;
            }

            const userStore = localStorage.getItem('user');
            if (!userStore) {
                showModal('Vui lòng đăng nhập'); // Thay alert
                return;
            }

            const user = JSON.parse(userStore);
            const response = await CartService.addToCart(user.email, product.name, quantityPurchased);

            await refreshCart();
            showModal(response.data || 'Đã thêm vào giỏ hàng thành công!'); // Thay alert
        } catch (error) {
            showModal('Có lỗi xảy ra. Vui lòng thử lại sau.', error); // Thay alert
        }
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
                            <button className="bg-red-500 text-white px-8 py-3">Mua Ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Notification isOpen={modalConfig.isOpen} message={modalConfig.message} onClose={closeModal} />
        </div>
    );
}

export default ProductDetail;
