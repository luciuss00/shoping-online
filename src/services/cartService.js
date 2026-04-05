import apiClient from '../api/productApi';

const CartService = {
    addToCart(email, nameProduct, quantity) {
        const url = '/addProductToCart';
        return apiClient.post(url, {
            email: email,
            nameProduct: nameProduct,
            quantity: quantity,
        });
    },

    removeToCart(email, nameProduct) {
        const url = '/deleteProductByName';
        return apiClient.delete(url, {
            data: {
                email: email,
                nameProduct: nameProduct,
            },
        });
    },

    getAllProductInCart(email) {
        const url = '/userCheckList';
        return apiClient.post(url, { email: email });
    },

    orderSomeItemInCart(email, listProduct) {
        const url = '/orderSomeItemInCart';
        return apiClient.post(url, {
            email,
            listProduct,
        });
    },

    orderDirect(email, listProduct, quantity) {
        const url = '/userOrder';
        return apiClient.post(url, {
            email,
            listProduct,
            quantity,
        });
    },
};

export default CartService;
