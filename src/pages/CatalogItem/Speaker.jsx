import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';

function Speaker() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Âm thanh" />
            <div className="flex">
                <SideBar name="Âm thanh" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Âm thanh" />
                </div>
            </div>
        </div>
    );
}

export default Speaker;
