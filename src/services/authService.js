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

    updateProfile(userData) {
        const url = '/addInforUser';
        return apiClient.post(url, userData);
    },
};

export default AuthService;
