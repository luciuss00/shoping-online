import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Jewelry() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ trang sức" />
            <div className="flex">
                <SideBar name="Trang sức" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Trang sức" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Jewelry;
