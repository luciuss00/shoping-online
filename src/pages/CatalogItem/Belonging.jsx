import Header from '../../components/Header';
import TitleCatalog from '../../components/TitleCatalog';
import SideBar from '../../components/Sidebar/Sidebar';
import ProductListInCatalog from '../../components/ProductListInCatalog';
import Footer from '../../components/Footer';

function Belonging() {
    return (
        <div>
            <Header />
            <TitleCatalog name="Đồ dùng" />
            <div className="flex">
                <SideBar name="Đồ dùng" />
                <div className="flex-1">
                    <ProductListInCatalog filterType="Đồ dùng" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Belonging;
