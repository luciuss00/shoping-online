import Header from '../../components/Header';
import ProductCatalog from '../../components/Catalog';
import Footer from '../../components/Footer';
import ProductCard from '../../components/Product';
function Home() {
    return (
        <div>
            <Header />
            <ProductCatalog />
            <ProductCard />
            <Footer />
        </div>
    );
}

export default Home;
