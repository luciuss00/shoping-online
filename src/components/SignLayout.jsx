import { Link } from 'react-router-dom';
import Footer from './Footer';

function SignLayout({ children }) {
    return (
        <>
            <div className="flex items-center bg-red-500 h-[80px] px-[180px]">
                <div className="flex items-center w-full h-[28px]">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-[30px] pb-1">
                            Shoping Online
                        </Link>
                    </div>
                    <div className="ml-auto">
                        <a href="help" target="_blank" className="text-[16px] text-white">
                            Bạn cần giúp đỡ?
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center h-[600px] ">
                    <div className="mx-auto">{children}</div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SignLayout;
