import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

function ProductList({ filterType }) {
    const { products, fetchProductsOnce } = useProducts();

    useEffect(() => {
        fetchProductsOnce();
    }, [fetchProductsOnce]);

    const displayProducts = filterType ? products.filter((p) => p.categoryProduct === filterType) : products;

    return (
        <div className="grid grid-cols-6 px-[130px]">
            {displayProducts && displayProducts.length > 0 ? (
                displayProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.nameProduct}
                        description={product.descriptionProduct}
                        type={product.categoryProduct}
                        cost={product.priceProduct}
                    />
                ))
            ) : (
                <p className="col-span-full text-center py-10">Không tìm thấy sản phẩm thuộc loại "{filterType}"</p>
            )}
        </div>
    );
}

export default ProductList;
