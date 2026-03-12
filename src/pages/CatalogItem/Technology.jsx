import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import ProductList from '../ProductList';

function Technology() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ProductList filterType="Công nghệ" />
                </div>
            </div>
        </div>
    );
}

export default Technology;
