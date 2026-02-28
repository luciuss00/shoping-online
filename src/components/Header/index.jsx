import { Link, NavLink } from 'react-router-dom';
import RightMenu from '../Menu/RightMenu';
import LeftMenu from '../Menu/LeftMenu';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <header className="h-[100px] px-[130px] bg-red-500">
            <div className="flex h-[34px] items-center justify-between pt-1">
                <LeftMenu />
                <RightMenu />
            </div>

            <div className="flex h-[66px]  items-center gap-x-10">
                {/* Thanh Tìm Kiếm */}
                <Link to="/" className="text-white text-[30px] pb-3">
                    Shopping Online
                </Link>
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
