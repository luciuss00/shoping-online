import { NavLink } from 'react-router-dom';

function SideBarProfile() {
    // Style chung cho các link
    const linkStyle = ({ isActive }) =>
        `flex items-center gap-3 text-sm transition-colors ${isActive ? 'text-[#ee4d2d] font-medium' : 'text-gray-800'}`;
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="w-[180px] shrink-0 p-2">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border border-gray-100">
                    <img src={user.image} />
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-semibold truncate">{user.fullName}</p>
                    <NavLink to="/profile" className="text-[13px] text-gray-500 flex items-center gap-1">
                        <i className="fa-solid fa-pen text-[10px]"></i> Sửa Hồ Sơ
                    </NavLink>
                </div>
            </div>

            <nav className="space-y-4">
                <NavLink to="/notifications" className={linkStyle}>
                    <i className="fa-regular fa-bell text-orange-600 w-4"></i>
                    <span>Thông Báo</span>
                </NavLink>

                <NavLink to="/profile" className={linkStyle}>
                    <i className="fa-regular fa-user text-blue-800 w-4"></i>
                    <span>Tài Khoản Của Tôi</span>
                </NavLink>

                <NavLink to="/order" className={linkStyle}>
                    <i className="fa-regular fa-clipboard text-blue-700 w-4"></i>
                    <span>Đơn Mua</span>
                </NavLink>

                <NavLink to="/vouchers" className={linkStyle}>
                    <i className="fa-solid fa-ticket text-orange-500 w-4"></i>
                    <span>Kho Voucher</span>
                </NavLink>
            </nav>
        </div>
    );
}

export default SideBarProfile;
