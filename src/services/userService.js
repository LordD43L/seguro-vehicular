import http from './httpService';

export function getRandomUser() {
    return http.get('');
}

export default {
    getRandomUser,
}