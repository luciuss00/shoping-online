import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';

function Accessory() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Phụ kiện" />
            <div className="flex">
                <SideBar name="Phụ kiện" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Phụ kiện" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accessory;
