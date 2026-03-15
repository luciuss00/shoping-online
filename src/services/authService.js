import apiClient from '../api/productApi';

const AuthService = {
    register(userData) {
        const url = '/auth/signup';
        return apiClient.post(url, userData);
    },

    login(credentials) {
        const url = '/auth/signin';
        // credentials sẽ chứa { email, password }
        return apiClient.post(url, credentials);
    },
};

export default AuthService;
