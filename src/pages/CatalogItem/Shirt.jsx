import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

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
        </div>
    );
}

export default Shirt;
