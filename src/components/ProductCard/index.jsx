import { Link } from 'react-router-dom';

function ProductCard({ id, img, name, description, type, cost }) {
    return (
        <div className="mx-[130px] mt-10">
            <div className="grid grid-cols-6">
                <Link
                    key={id}
                    to="/detail"
                    state={{
                        id,
                        img,
                        name,
                        description,
                        type,
                        cost,
                    }}
                    className="bg-white border border-gray-500 rounded-lg pt-2 hover:border-red-500 transition w-[200px] h-[300px]"
                >
                    <img className="mx-auto w-[188px] h-[188px]" src={img} />
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>{type}</p>
                    <p className="mt-4 text-red-500 text-[20px]">
                        {cost}
                        <u>đ</u>
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard;
