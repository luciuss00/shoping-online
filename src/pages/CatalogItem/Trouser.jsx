import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Trouser() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Quần" />
            <div className="flex">
                <SideBar name="Quần" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Quần" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Trouser;
