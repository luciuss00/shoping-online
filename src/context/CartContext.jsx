import { createContext, useState, useContext } from 'react';
import CartService from '../services/cartService';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartLoaded, setIsCartLoaded] = useState(false);

    const fetchCart = async () => {
        if (isCartLoaded) return;
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await CartService.getAllProductInCart(user.email);
            setCartItems(response.data);
            setIsCartLoaded(true);
        } catch (error) {
            console.error('Lỗi khi tải giỏ hàng:', error);
        }
    };

    // Hàm để gọi lại API mỗi khi thêm sản phẩm (ép buộc cập nhật)
    const refreshCart = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await CartService.getAllProductInCart(user.email);
            setCartItems(response.data);
            setIsCartLoaded(true);
            0;
        } catch (error) {
            console.error('Lỗi khi làm mới giỏ hàng:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, isCartLoaded, fetchCart, refreshCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook để dùng context nhanh hơn
export const useCart = () => useContext(CartContext);
