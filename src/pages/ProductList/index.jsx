// import { useEffect, useState } from 'react';
// import { getProducts } from '../services/productService';
// import ProductCard from '../components/ProductCard';

// function ProductList() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await getProducts();
//             setProducts(data);
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="grid grid-cols-4 gap-6">
//             {products.map((item) => (
//                 <ProductCard key={item._id} product={item} />
//             ))}
//         </div>
//     );
// }

// export default ProductList;
