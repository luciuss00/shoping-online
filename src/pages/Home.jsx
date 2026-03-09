import Header from '../components/Header';
import ProductCatalog from '../components/Catalog';
import ProductList from './ProductList';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <ProductCatalog />
            <div className="mt-10">
                <h1 className="ml-[130px] text-[25px]">Một số sản phẩm </h1>
                <ProductList />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
