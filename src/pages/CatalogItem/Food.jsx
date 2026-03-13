import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Food() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ ăn" />
            <div className="flex">
                <SideBar name="Đồ ăn" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Đồ ăn" />
                </div>
            </div>
        </div>
    );
}

export default Food;
