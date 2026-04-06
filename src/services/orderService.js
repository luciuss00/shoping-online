import apiClient from '../api/productApi';

const OrderService = {
    getAllOrder(email) {
        const url = '/userGetAllOrders';
        return apiClient.post(url, { email });
    },
};

export default OrderService;
