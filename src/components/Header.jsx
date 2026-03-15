import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import { useProducts } from '../context/ProductContext'; // Import hook của bạn
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const { products } = useProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const typingTimeoutRef = useRef(null);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // 1. Xóa bộ hẹn giờ cũ nếu người dùng vẫn đang gõ
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        if (value.trim() === '') {
            setFilteredResults([]);
            setIsDropdownOpen(false);
            return;
        }
        // 3. Thiết lập bộ hẹn giờ mới (2000ms = 2s)
        typingTimeoutRef.current = setTimeout(() => {
            console.log('Đang tìm kiếm cho:', value); // Kiểm tra logic chạy sau 2s
            const results = products.filter((item) => item.nameProduct.toLowerCase().includes(value.toLowerCase()));
            setFilteredResults(results.slice(0, 6));
            setIsDropdownOpen(true);
        }, 1000);
    };

    return (
        <header className="h-[100px] px-[130px] bg-red-500">
            <div className="flex h-[34px] items-center justify-between pt-1">
                <LeftMenu />
                <RightMenu />
            </div>

            <div className="flex h-[66px] items-center gap-x-10">
                <Link to="/" className="text-white text-[30px] pb-3">
                    Shopping Online
                </Link>

                {/* Container Thanh Tìm Kiếm */}
                <div className="mx-20 w-150 flex flex-col justify-center relative">
                    <form className="flex bg-white p-1 rounded-full shadow-sm h-[36px]">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                            onFocus={() => searchTerm && setIsDropdownOpen(true)}
                            placeholder="Tìm kiếm ..."
                            className="flex-1 px-4 outline-none text-black text-sm"
                        />
                        <Link
                            to={`/search?name=${encodeURIComponent(searchTerm)}`}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center w-10 justify-center rounded-full hover:bg-gray-100 transition-opacity"
                        >
                            <i className="fa-solid fa-magnifying-glass text-red-500"></i>
                        </Link>
                    </form>

                    {/* Danh sách gợi ý đổ xuống (Dropdown) */}
                    {isDropdownOpen && (
                        <div className="absolute top-[40px] left-0 w-full bg-white border border-gray-200 shadow-lg rounded-lg z-50 overflow-hidden">
                            {filteredResults.length > 0 ? (
                                <>
                                    {filteredResults.map((product) => (
                                        <Link
                                            key={product.id}
                                            state={{
                                                id: product.id,
                                                name: product.nameProduct,
                                                description: product.descriptionProduct,
                                                type: product.categoryProduct,
                                                cost: product.priceProduct,
                                                quantity: product.quantity,
                                                img: product.imageLink,
                                            }}
                                            to={`/detail?name=${encodeURIComponent(product.nameProduct)}`}
                                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 border-b"
                                        >
                                            {product.nameProduct}
                                        </Link>
                                    ))}
                                    {/* Nút Xem tất cả */}
                                    <Link
                                        to={`/search?name=${encodeURIComponent(searchTerm)}`}
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block w-full text-center py-2 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors"
                                    >
                                        Xem tất cả cho "{searchTerm}"
                                    </Link>
                                </>
                            ) : (
                                <div className="p-3 text-sm text-gray-500 text-center">Không tìm thấy sản phẩm</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="w-[180px] flex justify-center">
                    <i className="fa-solid fa-bag-shopping text-white text-[30px] pr-[100px] cursor-pointer"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
