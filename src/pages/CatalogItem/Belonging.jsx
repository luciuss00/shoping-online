import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Belonging() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ dùng" />
            <div className="flex">
                <SideBar name="Đồ dùng" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Đồ dùng" />
                </div>
            </div>
        </div>
    );
}

export default Belonging;
