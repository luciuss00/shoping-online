import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ productName }) => {
    const location = useLocation();

    // Tách path thành mảng, loại bỏ các phần tử rỗng
    // Ví dụ: "/thiet-bi-dien-tu/phu-kien" -> ["thiet-bi-dien-tu", "phu-kien"]
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Hàm để format text (Ví dụ: "thiet-bi-dien-tu" -> "Thiết Bị Điện Tử")
    const formatName = (name) => {
        return name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    };

    return (
        <nav className="flex items-center space-x-2 text-[14px] py-4 bg-transparent">
            {/* Luôn có link Home đầu tiên */}
            <Link to="/" className="text-blue-600 hover:underline">
                Shopee
            </Link>

            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <div key={to} className="flex items-center space-x-2">
                        <span className="text-gray-400 font-light">{'>'}</span>
                        {last ? (
                            // Nếu là phần tử cuối cùng (tên sản phẩm), hiển thị text đen, không link
                            <span className="text-gray-800 line-clamp-1 max-w-[400px]">
                                {productName || formatName(value)}
                            </span>
                        ) : (
                            // Nếu không phải cuối, hiển thị link xanh
                            <Link to={to} className="text-blue-600 hover:underline">
                                {formatName(value)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
