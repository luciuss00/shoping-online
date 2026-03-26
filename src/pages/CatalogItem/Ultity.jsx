import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Ultity() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Tiện ich" />
            <div className="flex">
                <SideBar name="Tiện ích" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Tiện ích" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Ultity;
