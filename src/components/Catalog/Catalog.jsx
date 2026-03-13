import catalogs from './CatalogList';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductCatalog() {
    const scrollRef = useRef(null);

    // Tính toán khoảng cách cuộn dựa trên chiều rộng của container
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8; // Cuộn 80% chiều rộng hiển thị
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-14 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 relative group">
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl text-gray-800 uppercase tracking-wider">Danh mục</h2>
                </div>

                {/* Nút điều hướng */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-2  top-51 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white cursor-pointer flex items-center justify-center"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-2 top-51 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white cursor-pointer flex items-center justify-center"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Container 2 hàng với cơ chế cuộn ngang */}
                <div
                    ref={scrollRef}
                    className="flex flex-col flex-wrap h-[340px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar gap-2 pb-4"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        display: 'flex',
                        flexFlow: 'column wrap', // Quan trọng: Tạo 2 hàng bằng cách bọc cột
                        alignContent: 'flex-start',
                    }}
                >
                    {catalogs.map((cat) => (
                        <Link
                            to={`/catalog${cat.link}`}
                            key={cat.id}
                            className="w-[150px] h-[150px] snap-start bg-white rounded-xl shadow-sm flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all flex-shrink-0"
                        >
                            <div
                                className={`text-2xl w-14 h-14 ${cat.color} rounded-full flex items-center justify-center mb-3`}
                            >
                                <i className={cat.icon}></i>
                            </div>
                            <h3 className="text-[13px] px-2 font-medium text-gray-600 line-clamp-2">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
