import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Interior() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ nội thất" />
            <div className="flex">
                <SideBar name="Nội thất" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Nội thất" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Interior;
