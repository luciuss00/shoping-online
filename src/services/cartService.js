import apiClient from '../api/productApi';

const CartService = {
    addToCart(email, nameProduct, quantity) {
        const url = '/addProductToCart';
        return apiClient.get(url, {
            params: {
                user: email,
                nameProduct: nameProduct,
                quantity: quantity,
            },
        });
    },

    removeToCart(email, nameProduct) {
        const url = '/deleteProductByName';
        return apiClient.delete(
            url,
            { email: email },
            {
                params: {
                    name: nameProduct,
                },
            },
        );
    },

    getAllProductInCart(email) {
        const url = '/userCheckList';
        return apiClient.post(url, { email: email });
    },
};

export default CartService;
