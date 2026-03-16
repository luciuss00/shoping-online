import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

function ProductListInCatalog({ filterType }) {
    const { products, fetchProductsOnce } = useProducts();
    const [visibleCount, setVisibleCount] = useState(12);
    const [searchParams] = useSearchParams();
    const subCategoryFilter = searchParams.get('subCategory');
    const priceSort = searchParams.get('priceSort');
    const stockSort = searchParams.get('stockSort');

    useEffect(() => {
        fetchProductsOnce();
    }, [fetchProductsOnce]);

    let filterProduct = products.filter((p) => {
        const matchMainCategory = filterType ? p.categoryProduct === filterType : true;
        const matchSubCategory = subCategoryFilter ? p.subCategoryProduct === subCategoryFilter : true;
        return matchMainCategory && matchSubCategory;
    });

    filterProduct = [...filterProduct].sort((a, b) => {
        if (priceSort) {
            const diff = priceSort === 'asc' ? a.priceProduct - b.priceProduct : b.priceProduct - a.priceProduct;
            if (diff !== 0) return diff;
        }
        if (stockSort) {
            const diff = stockSort === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
            if (diff !== 0) return diff;
        }
        return 0;
    });

    const displayProducts = filterProduct.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 12); // Hiện thêm 2 hàng nữa
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-5 pr-[140px] w-full">
                {displayProducts && displayProducts.length > 0 ? (
                    displayProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.nameProduct}
                            description={product.descriptionProduct}
                            type={product.categoryProduct}
                            subType={product.subCategoryProduct}
                            cost={product.priceProduct}
                            quantity={product.quantity}
                            img={product.imageLink}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center py-10">Đang tải . . . </p>
                )}
            </div>

            {filterProduct.length > visibleCount && (
                <button
                    onClick={handleLoadMore}
                    className="mt-8 px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
                >
                    Xem tiếp
                </button>
            )}
        </div>
    );
}

export default ProductListInCatalog;
