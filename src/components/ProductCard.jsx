import { Link } from 'react-router-dom';

function ProductCard({ id, img, name, description, type, cost }) {
    return (
        <Link
            key={id}
            to="/detail"
            state={{ id, img, name, description, type, cost }}
            className="w-[200px] h-[300px] mt-1 bg-white border border-gray-400 rounded-lg p-2 hover:border-red-500 transition block"
        >
            <img className="w-[188px] h-[188px] object-cover mb-2" src={img} alt={name} />
            <h1 className="text-[16px] h-[40px]">{name}</h1>
            <p className="text-xs text-gray-500 truncate">{type}</p>
            <div className="flex">
                <p className="mt-2 text-red-500 text-[18px] font-bold">
                    {cost.toLocaleString()}
                    <u className="no-underline ml-1 text-sm">đ</u>
                </p>
                <p className="ml-auto mt-auto text-red-500 text-[14px]">Xem chi tiết</p>
            </div>
        </Link>
    );
}

export default ProductCard;
