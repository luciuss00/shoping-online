import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

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
        </div>
    );
}

export default Ultity;
