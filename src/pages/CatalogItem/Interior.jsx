import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

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
        </div>
    );
}

export default Interior;
