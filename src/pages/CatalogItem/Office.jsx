import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Office() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Văn phòng" />
            <div className="flex">
                <SideBar name="Văn phòng" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Văn phòng" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Office;
