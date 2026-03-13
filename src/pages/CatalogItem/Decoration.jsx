import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Decoration() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ trang trí" />
            <div className="flex">
                <SideBar name="Trang trí" />
                <div>
                    <ProductListInCatalog filterType="Trang trí" />
                </div>
            </div>
        </div>
    );
}

export default Decoration;
