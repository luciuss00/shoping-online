import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

function ProductList() {
    // Lấy products và hàm fetch từ Context
    const { products, fetchProductsOnce } = useProducts();

    useEffect(() => {
        fetchProductsOnce();
    }, [fetchProductsOnce]);

    return (
        <div className="grid grid-cols-6 px-[130px]">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.nameProduct}
                        description={product.description}
                        type={product.type}
                        cost={product.priceProduct}
                    />
                ))
            ) : (
                <p>Đang tải hoặc không có sản phẩm...</p>
            )}
        </div>
    );
}

export default ProductList;
