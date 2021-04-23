import axios from 'axios';

const httpService = axios.create({
    baseURL: 'https://randomuser.me/api'
});

httpService.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        console.log(response);
        return response;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

function setJwt(jwt) {
    httpService.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
}

export default {
    get: httpService.get,
    post: httpService.post,
    put: httpService.put,
    delete: httpService.delete,
    setJwt
};
