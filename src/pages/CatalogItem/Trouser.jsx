import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

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
        </div>
    );
}

export default Trouser;
