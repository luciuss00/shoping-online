import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Household() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ gia dụng" />
            <div className="flex">
                <SideBar name="Gia dụng" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Gia dụng" />
                </div>
            </div>
        </div>
    );
}

export default Household;
