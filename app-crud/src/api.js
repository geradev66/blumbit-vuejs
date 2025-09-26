import axios from "axios"

export function Api(){
    const URL_BACKEND = "https://dev.to/api"
    const api = axios.create({
        baseURL: URL_BACKEND
    })
    return api
}