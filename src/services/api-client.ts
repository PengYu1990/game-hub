import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "fb9f39142d0d4923aaee04ffe24da8ba"
    }
})
