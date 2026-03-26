import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Device() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Thiết bị" />
            <div className="flex">
                <SideBar name="Thiết bị" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Thiết bị" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Device;
