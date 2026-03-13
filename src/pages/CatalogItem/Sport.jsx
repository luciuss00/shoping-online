import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Sport() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Thể thao" />
            <div className="flex">
                <SideBar name="Thể thao" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Thể thao" />
                </div>
            </div>
        </div>
    );
}

export default Sport;
