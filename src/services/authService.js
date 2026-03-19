import apiClient from '../api/productApi';

const AuthService = {
    register(userData) {
        const url = '/createRe';
        return apiClient.post(url, userData);
    },

    login(credentials) {
        const url = '/loginRes';
        return apiClient.post(url, credentials);
    },
};

export default AuthService;
