import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Search() {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const searchName = queryParams.get('name') || '';

    return (
        <div>
            <Header />
            <div>
                <h1 className="mt-9 mb-8 text-[30px] text-center">
                    Kết quả tìm kiếm cho: <span className="text-red-500">"{searchName}"</span>
                </h1>
                <ProductList name={searchName} />
            </div>
            <Footer />
        </div>
    );
}

export default Search;
