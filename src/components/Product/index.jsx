import { Link } from 'react-router-dom';

function ProductCard() {
    return (
        <div className="mx-[130px] mt-10">
            <div>
                <h1 className="text-[26px]">Một số sản phẩm nổi bật</h1>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <Link
                    to="/detail"
                    className="bg-white shadow-xl rounded-lg p-4 hover:shadow-lg transition w-[280px] h-[280px]"
                >
                    <img src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png" />
                    <h1>Con mèo</h1>
                    <p>con mèo có những đặc điểm</p>
                </Link>
                <Link className="bg-white shadow-xl rounded-lg p-4 hover:shadow-lg transition w-[280px] h-[280px]">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png" />
                    <h1>Con mèo</h1>
                    <p>con mèo có những đặc điểm</p>
                </Link>
                <Link className="bg-white shadow-xl rounded-lg p-4 hover:shadow-lg transition w-[280px] h-[280px]">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png" />
                    <h1>Con mèo</h1>
                    <p>con mèo có những đặc điểm</p>
                </Link>
                <Link className="bg-white shadow-xl rounded-lg p-4 hover:shadow-lg transition w-[280px] h-[280px]">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-appdlpage-live-vn/static/img/appleStore.0ca159be.png" />
                    <h1>Con mèo</h1>
                    <p>con mèo có những đặc điểm</p>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
