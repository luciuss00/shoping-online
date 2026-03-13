import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Shoe() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Giày" />
            <div className="flex">
                <SideBar name="Giày" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Giày" />
                </div>
            </div>
        </div>
    );
}

export default Shoe;
