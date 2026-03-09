import { Link } from 'react-router-dom';
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
];

function ProductCatalog() {
    return (
        <div className="p-6 bg-gray-100 mt-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl text-gray-800">DANH MỤC</h2>
                </div>

                {/* Grid 10 danh mục */}
                <div className="grid grid-cols-2 md:grid-cols-6">
                    {catalogs.map((cat) => (
                        <Link
                            to={cat.link}
                            key={cat.id}
                            className=" h-[180px] w-[180px] bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
                        >
                            <div
                                className={`text-2xl w-16 h-16 ${cat.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                            >
                                {cat.icon}
                            </div>

                            <h3 className="text-[16px] text-gray-700 mb-1 group-hover:text-red-500 transition-colors">
                                {cat.name}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
