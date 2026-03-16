import '@fortawesome/fontawesome-free/css/all.min.css';

function LeftMenu() {
    return (
        <nav>
            {/* Menu trái */}
            <div className="flex h-[24px] items-center text-[14px] text-white">
                <div className="ml-[6px] flex items-center p-1">
                    <p>Kết nối</p>
                    <div className="ml-1.5 flex gap-2">
                        <a
                            href="https://www.youtube.com/watch?v=cvh0nX08nRw&list=RDcvh0nX08nRw&start_radio=1"
                            target="_blank"
                            className="hover:text-white/70"
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            href="https://twemoji.twitter.com/?ref=undesign"
                            target="_blank"
                            className="hover:text-white/70"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default LeftMenu;
