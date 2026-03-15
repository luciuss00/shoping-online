import apiClient from '../api/productApi';

const AuthService = {
    register(userData) {
        const url = '/auth/signup';
        return apiClient.post(url, userData);
    },
};

export default AuthService;
