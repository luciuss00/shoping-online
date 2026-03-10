import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const catalogs = [
    {
        id: 1,
        name: 'Thời trang',
        link: '/fashion',
        icon: <i className="fa-solid fa-shirt"></i>,
        color: 'bg-blue-100 text-blue-600',
    },
    {
        id: 2,
        name: 'Máy tính',
        link: '/computer',
        icon: <i className="fa-solid fa-desktop"></i>,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 3,
        name: 'Điện thoại',
        link: '/smartphone',
        icon: <i className="fa-solid fa-mobile-screen"></i>,
        color: 'bg-green-100 text-green-600',
    },
    {
        id: 4,
        name: 'Ô tô & Xe máy',
        link: '/car-motorbike',
        icon: <i className="fa-solid fa-car"></i>,
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        id: 5,
        name: 'Sách & Văn phòng phẩm',
        link: '/book',
        icon: <i className="fa-solid fa-book"></i>,
        color: 'bg-red-100 text-red-600',
    },
    {
        id: 6,
        name: 'Âm thanh',
        link: '/speaker',
        icon: <i className="fa-solid fa-headphones"></i>,
        color: 'bg-purple-100 text-purple-600',
    },
    {
        id: 7,
        name: 'Thiết bị',
        link: '/device',
        icon: <i className="fa-solid fa-keyboard"></i>,
        color: 'bg-orange-100 text-orange-600',
    },
    {
        id: 8,
        name: 'Phụ kiện',
        link: '/accessory',
        icon: <i className="fa-solid fa-keyboard"></i>,
        color: 'bg-blue-100 text-blue-600',
    },
];

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
                    className="absolute left-0 top-33 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 cursor-pointer -left-2"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-34 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow-mdtransition-all opacity-0 group-hover:opacity-100 hover:bg-red-500 cursor-pointer -right-2"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

                {/* Container danh mục với Snap Scroll */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {catalogs.map((cat) => (
                        <Link
                            to={`/catalog${cat.link}`}
                            key={cat.id}
                            className="min-w-[calc(50%-8px)] md:min-w-[calc(16.666%-14px)] snap-start h-[180px] bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                            <div
                                className={`text-2xl w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mb-4`}
                            >
                                {cat.icon}
                            </div>
                            <h3 className="text-[15px] font-medium text-gray-600">{cat.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
