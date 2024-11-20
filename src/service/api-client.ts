import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6fbc1eca65e3458bb1ae905bb45cff9b"
    }
})
