import ApiRequest from "./utils/config/axios.config";

export function getRandomUser() {
    return ApiRequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
        }
    }); // https://randomuser.me/api/
}