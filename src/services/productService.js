import apiClient from '../api/productApi';

const ProductService = {
    getAllProduct() {
        const url = '/showProductUser';
        return apiClient.post(url);
    },
};

export default ProductService;
