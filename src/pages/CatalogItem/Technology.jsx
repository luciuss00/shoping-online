import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';
function Technology() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Công nghệ" />
            <div className="flex">
                <SideBar name="Công nghệ" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Công nghệ" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Technology;
