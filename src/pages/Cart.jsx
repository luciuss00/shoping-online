import { useCart } from '../context/CartContext';
import Header from '../components/Header';

function Cart() {
    const { cartItems } = useCart();

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="max-w-[1000px] mx-auto bg-white mt-10 p-6 shadow-md rounded-md">
                <h2 className="text-xl font-bold border-b pb-4 mb-4">Giỏ hàng của bạn</h2>
                {cartItems.length === 0 ? (
                    <p className="text-center py-10">Giỏ hàng trống.</p>
                ) : (
                    cartItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b py-4">
                            <div className="flex items-center gap-4">
                                <div className="font-medium">{item.nameProduct}</div>
                            </div>
                            <div className="flex gap-10">
                                <span>
                                    Số lượng: <b>{item.quantity}</b>
                                </span>
                                <span className="text-red-500 font-bold">
                                    {Number(item.priceProduct).toLocaleString()}₫
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cart;
