import axios from "axios";

const USER_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {
    getUsers(){
        return axios.get(USER_REST_API_URL);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService(); 