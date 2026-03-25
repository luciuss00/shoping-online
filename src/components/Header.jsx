import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const navigate = useNavigate();
    const { products } = useProducts();
    const { cartItems, fetchCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        fetchCart(); // Chỉ gọi API nếu chưa có dữ liệu
    }, []);

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
        typingTimeoutRef.current = setTimeout(() => {
            console.log('Đang tìm kiếm cho:', value);
            const results = products.filter((item) => item.nameProduct.toLowerCase().includes(value.toLowerCase()));
            setFilteredResults(results.slice(0, 5));
            setIsDropdownOpen(true);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            setIsDropdownOpen(false);
            navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
        }
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
                    <form onSubmit={handleSubmit} className="flex bg-white p-1 rounded-full shadow-sm h-[36px]">
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

                {/* Icon Giỏ hàng và Popover */}
                <div className="relative group w-[180px] flex justify-center py-4">
                    <Link to="/cart" className="relative mr-[130px]">
                        <i className="fa-solid fa-bag-shopping text-white text-[30px] cursor-pointer"></i>
                        {cartItems.length > 0 && (
                            <span className="absolute top-[-5px] -right-[7px] bg-yellow-300 text-red-500 text-[11px] font-bold h-5 w-5 flex items-center justify-center rounded-full border border-red-500 shadow-md">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Popover Giỏ hàng (Hiện khi di chuột vào 'group') */}
                    <div
                        className="absolute top-full right-[60px] w-[400px] bg-white shadow-2xl rounded-sm border border-gray-100 
                    scale-0 group-hover:scale-100 origin-top-right transition-all duration-200 z-[100] opacity-0 group-hover:opacity-100"
                    >
                        {/* Mũi tên nhọn phía trên */}
                        <div className="absolute -top-2 right-21 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>

                        <div className="p-3">
                            <h3 className="text-gray-400 text-sm mb-3">Sản phẩm trong giỏ</h3>

                            {cartItems.length > 0 ? (
                                <>
                                    <div className="max-h-[300px] overflow-y-auto">
                                        {cartItems.slice(0, 4).map((item, index) => (
                                            <Link
                                                to={`/detail?name=${encodeURIComponent(item.nameProduct)}`}
                                                key={index}
                                                className="flex items-center gap-3 py-2 hover:bg-gray-50 transition-colors"
                                            >
                                                <img
                                                    src={item.imageLink}
                                                    alt=""
                                                    className="w-10 h-10 object-cover border border-gray-200"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-800 truncate">{item.nameProduct}</p>
                                                </div>
                                                <div className="text-sm text-red-500">
                                                    {Number(item.priceProduct).toLocaleString('vi-VN')}₫
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                                        <span className="text-xs text-gray-500">
                                            {cartItems.length} sản phẩm trong giỏ
                                        </span>
                                        <Link
                                            to="/cart"
                                            className="bg-red-500 text-white px-4 py-2 text-sm rounded-sm hover:bg-red-600 transition-colors"
                                        >
                                            Xem Tất Cả
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="py-10 text-center">
                                    <img
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36be23d02e.png"
                                        alt="empty-cart"
                                        className="w-24 mx-auto mb-2"
                                    />
                                    <p className="text-sm text-gray-500">Chưa có sản phẩm</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
