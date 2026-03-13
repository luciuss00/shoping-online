import {
    shirts,
    speakers,
    technologies,
    schoolSuppies,
    foods,
    belongings,
    gamings,
    households,
    shoes,
    hats,
    interiors,
    accessories,
    trousers,
    sports,
    devices,
    ultities,
    jewelries,
    decorations,
    offices,
} from './SidebarItem';
import { useSearchParams } from 'react-router-dom';
function SideBar({ name }) {
    const categoryMap = {
        Áo: shirts,
        'Âm thanh': speakers,
        'Công nghệ': technologies,
        'Học tập': schoolSuppies,
        'Đồ ăn': foods,
        'Đồ dùng': belongings,
        Gaming: gamings,
        'Gia dụng': households,
        Giày: shoes,
        Mũ: hats,
        'Nội thất': interiors,
        'Phụ kiện': accessories,
        Quần: trousers,
        'Thể thao': sports,
        'Thiết bị': devices,
        'Tiện ích': ultities,
        'Trang sức': jewelries,
        'Trang trí': decorations,
        'Văn phòng': offices,
    };

    const currentData = categoryMap[name] || [];

    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get('subCategory');

    const handleTick = (itemName) => {
        if (currentFilter === itemName) {
            searchParams.delete('subCategory');
        } else {
            searchParams.set('subCategory', itemName);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="pl-[140px] pr-[55px] py-4">
            <h3 className="font-bold mb-4 text-lg">Lọc sản phẩm theo: </h3>
            <div className="flex flex-col gap-3">
                {currentData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => handleTick(item)}
                    >
                        {/* Ô tick giả lập */}
                        <div
                            className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-all
                            ${
                                currentFilter === item
                                    ? 'bg-red-500 border-red-500'
                                    : 'border-gray-400 group-hover:border-red-500'
                            }`}
                        >
                            {currentFilter === item && (
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </div>

                        <span className={`${currentFilter === item ? 'text-red-500 font-medium' : 'text-gray-700'}`}>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideBar;
