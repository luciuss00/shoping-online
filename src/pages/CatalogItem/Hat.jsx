import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Hat() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Mũ" />
            <div className="flex">
                <SideBar name="Mũ" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Mũ" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hat;
