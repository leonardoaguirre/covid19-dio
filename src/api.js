import axios from "../node_modules/axios/index"

const API = axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com/countries',
})

const getCountry = (country) => {
    return API.get(`/${country}`).then(res => res.data)
}

export default { getCountry }