import { createContext, useState, useContext } from 'react';
import OrderService from '../services/orderService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await OrderService.getAllOrder(user.email);
            setOrders(response.data);
        } catch (error) {
            console.error('Lỗi khi tải giỏ hàng:', error);
        }
    };

    return <OrderContext.Provider value={{ orders, fetchOrders }}>{children}</OrderContext.Provider>;
};

// Hook để dùng context nhanh hơn
export const useOrder = () => useContext(OrderContext);
