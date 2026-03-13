import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Office() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Văn phòng" />
            <div className="flex">
                <SideBar name="Văn phòng" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Văn phòng" />
                </div>
            </div>
        </div>
    );
}

export default Office;
