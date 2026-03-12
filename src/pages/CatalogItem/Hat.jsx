import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import ProductList from '../ProductList';

function Hat() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ProductList filterType="Mũ" />
                </div>
            </div>
        </div>
    );
}

export default Hat;
