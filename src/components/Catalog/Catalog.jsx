import catalogs from './CatalogList';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProductCatalog() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-14 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 relative group">
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl text-gray-800 uppercase tracking-wider">Danh mục</h2>
                </div>

                {/* Nút điều hướng - Chỉ hiện khi hover vào vùng chứa */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-3 top-55 -translate-y-1/2 z-10 bg-white w-13 h-13 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 cursor-pointer -left-2"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-3 top-55 -translate-y-1/2 z-10 bg-white w-13 h-13 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 cursor-pointer -right-2"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Container danh mục với Snap Scroll */}
                <div
                    ref={scrollRef}
                    className="grid grid-cols-7 scrollbar-hide snap-x snap-mandatory gap-2 pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {catalogs.map((cat) => (
                        <Link
                            to={`/catalog${cat.link}`}
                            key={cat.id}
                            className="min-w-[calc(50%-8px)] md:min-w-[calc(16.666%-14px)] snap-start h-[160px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div
                                className={`text-2xl w-15 h-15 ${cat.color} rounded-full flex items-center justify-center mb-4`}
                            >
                                <i className={cat.icon}></i>
                            </div>
                            <h3 className="text-[14px] font-medium text-gray-600">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
