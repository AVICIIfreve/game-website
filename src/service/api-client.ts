import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2d2ba0f52d1f4d658fcaaf560d6c2a5e"
    }
})
