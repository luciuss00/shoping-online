import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function SchoolSupply() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Dụng cụ học tập" />
            <div className="flex">
                <SideBar name="Học tập" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Học tập" />
                </div>
            </div>
        </div>
    );
}

export default SchoolSupply;
