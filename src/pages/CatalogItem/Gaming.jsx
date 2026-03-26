import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Gaming() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Gaming" />
            <div className="flex">
                <SideBar name="Gaming" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Gaming" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gaming;
