import { CatItemType } from './../types/types';

import axios, { AxiosResponse } from "axios"
import { GetCatsType } from "../types/types"

const API_KEY = 'live_1jnfxBoKHYPh4HdFQiOW00XEckSJDbArDFgUYwRKr08i7BHFc16MNxGHoirsfPVx'
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://api.thecatapi.com/v1/images`,

})

export const todoAPI = {

    getCats(page: number = 1, limit: number = 10) {
        return axios.get<CatItemType[]>(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&limit=${limit}&page=${page}`).then(response => {
            return response;
        })
    },
    getRandomCat() {
        return axios.get<CatItemType[]>(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}`).then(response => {
            return response;
        })
    },
    getCatByBreed(breed: string) {
        return axios.get<CatItemType[]>(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breed}&limit=6`).then(response => {
            return response;
        })
    },
    getCatByCategories(categoryId: string) {
        return axios.get<CatItemType[]>(`https://api.thecatapi.com/v1/images/search?categories=2&limit=6&api_key=${API_KEY}`).then(response => {
            return response;
        })
    }
}