import { Link } from 'react-router-dom';

function SideBarProfile({ name, image }) {
    return (
        <div>
            <div className="w-[180px] shrink-0">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img src={image} alt="" />
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-semibold truncate">{name}</p>
                        <Link to="/profile" className="text-[13px] text-gray-500 flex items-center gap-1">
                            <i className="fa-solid fa-pen text-[10px]"></i> Sửa Hồ Sơ
                        </Link>
                    </div>
                </div>

                <nav className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <i className="fa-regular fa-bell text-orange-600"></i> Thông Báo
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm font-medium text-[#ee4d2d]">
                            <i className="fa-regular fa-user text-blue-800"></i> Tài Khoản Của Tôi
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <i className="fa-regular fa-clipboard text-blue-700"></i> Đơn Mua
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <i className="fa-solid fa-ticket text-orange-500"></i> Kho Voucher
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default SideBarProfile;
