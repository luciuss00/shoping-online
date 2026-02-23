import { Link, NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <header className="h-[100px] px-[130px] bg-red-500">
            <div>
                <div className="flex">
                    <div className="flex h-[34px] items-center pl-10 text-white text-[14px]">
                        <Link className=" hover:text-white/70 cursor-pointer mr-3">Trang chủ</Link>
                        <Link className=" hover:text-white/70 cursor-pointer mx-3">Tin tức</Link>
                        <Link className=" hover:text-white/70 cursor-pointer mx-3">Giới thiệu</Link>
                    </div>
                    <div className="flex h-[34px] items-center ml-auto px-10 text-white text-[14px]">
                        <div className="flex items-center hover:text-white/70 cursor-pointer mx-3">
                            <i className="fa-regular fa-bell mr-1.5"></i>
                            Thông Báo
                        </div>

                        <div className="mx-3">
                            <NavLink to="" className="flex items-center hover:text-white/70">
                                <i className="fa-regular fa-circle-question mr-1.5"></i>
                                Hỗ Trợ
                            </NavLink>
                        </div>

                        <div className="mx-3">
                            <NavLink className="flex items-center hover:text-white/70">
                                <i className="fa-solid fa-earth-americas mr-1.5"></i>
                                Tiếng Việt
                                <i className="fa-solid fa-chevron-down ml-1 text-[10px]"></i>
                            </NavLink>
                        </div>

                        <div className="flex items-center ml-2  pl-3">
                            <NavLink to="/signup" className="font-medium hover:text-white/70">
                                Đăng ký
                            </NavLink>
                            <span className="mx-2 opacity-30  text-black">|</span>
                            <NavLink to="/signin" className="font-medium hover:text-white/70">
                                Đăng nhập
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-[66px]  items-center gap-x-10">
                {/* Thanh Tìm Kiếm */}
                <h1 className="text-white text-[30px] pb-3">Shoping Online</h1>
                <div className="flex-1 flex flex-col justify-center">
                    <form className="flex bg-white p-1 rounded-sm shadow-sm h-[36px]">
                        <input
                            type="text"
                            placeholder="Tìm kiếm ..."
                            className="flex-1 px-4 outline-none text-black text-sm"
                        />
                        <button className="bg-[#f53d2d] w-[50px] flex items-center justify-center rounded-sm hover:opacity-70 transition-opacity cursor-pointer">
                            <i className="fa-solid fa-magnifying-glass text-white"></i>
                        </button>
                    </form>
                </div>

                {/* Giỏ hàng */}
                <div className="w-[180px] flex justify-center">
                    <i className="fa-solid fa-cart-shopping text-white text-[30px] pr-[100px] cursor-pointer"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
