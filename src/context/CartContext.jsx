import { createContext, useState, useContext } from 'react';
import CartService from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const fetchCart = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await CartService.getAllProductInCart(user.email);
            setCartProducts(response.data);
        } catch (error) {
            console.error('Lỗi khi tải giỏ hàng:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartProducts, fetchCart, refreshCart: fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook để dùng context nhanh hơn
export const useCart = () => useContext(CartContext);
