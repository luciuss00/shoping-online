import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Shirt() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Áo" />
            <div className="flex">
                <SideBar name="Áo" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Áo" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shirt;
