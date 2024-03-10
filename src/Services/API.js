import axios from "axios";

export const getMyMusics = () => {
    return axios.get('http://localhost:8800/MyMusic')
}
