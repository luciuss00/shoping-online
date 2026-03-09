import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function LeftMenu() {
    return (
        <nav>
            {/* Menu trái */}
            <div className="flex h-[24px] items-center text-[14px] text-white">
                <div className="ml-[6px] flex items-center p-1">
                    <p>Kết nối</p>
                    <div className="ml-1.5 flex gap-2">
                        <NavLink to="#" className="hover:text-white/70">
                            <i className="fa-brands fa-facebook"></i>
                        </NavLink>
                        <NavLink to="#" className="hover:text-white/70">
                            <i className="fa-brands fa-instagram"></i>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default LeftMenu;
