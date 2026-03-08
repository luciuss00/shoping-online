import ProductCard from '../../components/ProductCard';

function ProductList() {
    const products = [
        {
            id: 1,
            img: 'data:image/jpeg;base64,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',
            name: 'Áo khoác jacket',
            description: 'Áo khoác mát lạnh vào mùa hè',
            type: 'Áo khoác',
            cost: '100.000',
        },
        {
            id: 2,
            img: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
            name: 'Điện thoại Iphone 12',
            description: 'Điện thoại bla bla',
            type: 'Điện thoại',
            cost: '2.000.000',
        },
    ];
    //     const [products, setProducts] = useState([]);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             const data = await getProducts();
    //             setProducts(data);
    //         };
    //         fetchData();
    //     }, []);

    return (
        <div className="grid grid-cols-6 ">
            {products.map((product) => (
                <ProductCard
                    id={product.id}
                    img={product.img}
                    name={product.name}
                    description={product.description}
                    type={product.type}
                    cost={product.cost}
                />
            ))}
        </div>
    );
}

export default ProductList;
