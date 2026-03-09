import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import ProductList from '../ProductList';

function Book() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ProductList filterType="Sách" />
                </div>
            </div>
        </div>
    );
}

export default Book;
