import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import ProductList from '../ProductList';

function Speaker() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ProductList filterType="Âm thanh" />
                </div>
            </div>
        </div>
    );
}

export default Speaker;
