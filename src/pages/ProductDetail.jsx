import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

function ProductDetail() {
    const location = useLocation();
    const product = location.state;

    const [quantityPurchased, setQuantityPurchased] = useState();

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

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setQuantityPurchased(value);
        }
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            <div className="max-w-[1200px] mx-auto mt-10 bg-white p-6 flex gap-10">
                <div className="w-[450px] h-[450px]">
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

                    <p className="mt-2 text-[14px] text-gray-500">
                        Mô tả: <span>{product.description}</span>
                    </p>

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

                    <div className="mt-4 flex items-center gap-2">
                        <span>Số lượng mua: </span>

                        <input
                            value={quantityPurchased}
                            onChange={handleInputChange}
                            type="text"
                            className="mt-[2px] text-center w-[30px] border-1 border-gray-500   "
                        />
                    </div>

                    {/* BUTTON */}
                    <div className="flex gap-4 mt-12">
                        <button className="border border-red-500 text-red-500 px-6 py-3">Thêm Vào Giỏ Hàng</button>
                        <button className="bg-red-500 text-white px-8 py-3">Mua Ngay</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
