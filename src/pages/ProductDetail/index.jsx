import Header from '../../components/Header';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
    const location = useLocation();
    const product = location.state;

    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else if (e.target.value === '') {
            setQuantity('');
        }
    };
    console.log(product);

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
                    <h1 className="text-[22px] font-semibold">{product.name}</h1>

                    <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-gray-500">25 Đánh giá</span>
                    </div>

                    {/* PRICE */}
                    <div className="bg-gray-100 mt-4 p-4">
                        <span className="text-red-500 text-[32px] font-bold">{product.cost}₫</span>
                    </div>

                    <div>
                        <h1 className="text-[22px] font-semibold">{product.description}</h1>
                    </div>

                    {/* SIZE */}
                    <div className="mt-6">
                        <p className="text-gray-500 mb-2">Kích Thước</p>
                        <div className="flex gap-3">
                            <button className="border px-4 py-2 hover:border-red-500">17cm</button>
                            <button className="border px-4 py-2 hover:border-red-500">19cm</button>
                        </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-gray-500">Số lượng</span>

                        <div className="flex border items-center">
                            <button
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                className="px-3 py-1 border-r hover:bg-gray-100"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={quantity}
                                onChange={handleInputChange}
                                onBlur={() => {
                                    if (quantity === '') setQuantity(1);
                                }} // Nếu để trống thì reset về 1
                                className="w-[50px] text-center outline-none"
                            />
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="px-3 py-1 border-l hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="flex gap-4 mt-8">
                        <button className="border border-red-500 text-red-500 px-6 py-3">Thêm Vào Giỏ Hàng</button>

                        <button className="bg-red-500 text-white px-8 py-3">Mua Ngay</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
