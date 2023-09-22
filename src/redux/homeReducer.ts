import { CatItemType, GetCatsType } from './../types/types';
import { ThunkAction } from 'redux-thunk/es/types';
import { AppStateType } from './store';
import { todoAPI } from '../api/api';
const GET_CATS = 'GET_CATS';
const IS_LOADING = 'IS_LOADING';
const GET_RANDOM_CAT = 'GET_RANDOM_CAT';

type HomeStateType = {
    cats: CatItemType[] | [],
    isLoading: boolean,
    randomCat: CatItemType[] | null,
}

let initialState: HomeStateType = {
    cats: [],
    isLoading: true,
    randomCat: null,
}

type getCatsActionType = {
    type: typeof GET_CATS,
    cats: CatItemType[]
}

type isLoadingActionType = {
    type: typeof IS_LOADING,
    isLoading: boolean
}
type getRandomActionType = {
    type: typeof GET_RANDOM_CAT,
    randomCat: CatItemType[]
}
type ActionTypes = getCatsActionType | isLoadingActionType | getRandomActionType;

const homeReducer = (state = initialState, action: ActionTypes): HomeStateType => {
    switch (action.type) {
        case GET_CATS: {
            return {
                ...state,
                cats: [...state.cats,...action.cats]
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case GET_RANDOM_CAT: {
            return {
                ...state,
                randomCat: action.randomCat
            }
        }
        default: return state;
    }
}

export const getCats = (cats: CatItemType[]): getCatsActionType => {
    return {
        type: GET_CATS, cats
    }
}

export const isLoading = (isLoading: boolean): isLoadingActionType => {
    return {
        type: IS_LOADING, isLoading
    }
}
export const getRandomCat = (randomCat: CatItemType[]): getRandomActionType => {
    return {
        type: GET_RANDOM_CAT, randomCat
    }
}
export const getCatsThunk = (page: number, limit: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
    //диспатчить можем теперь только определенный нами ActionTypes
    return async (dispatch, getState) => {
        try {
            dispatch(isLoading(true))
            todoAPI.getCats(page, limit).then(response => {
                dispatch(getCats(response.data))
            })

            dispatch(isLoading(false))

        } catch (error) {
            console.log(error)
        }
    }
}

export const getRandomCatThunk = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes> => {
    return async (dispatch, getState) => {
        try {
            dispatch(isLoading(true))
            todoAPI.getRandomCat().then(response => {
                dispatch(getRandomCat(response.data))
            })

            dispatch(isLoading(false))

        } catch (error) {
            console.log(error)
        }
    }
}

export default homeReducer;