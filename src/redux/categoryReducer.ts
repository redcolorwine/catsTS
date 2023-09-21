import { isLoading } from './homeReducer';
import { CatItemType } from "../types/types"
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';
import { todoAPI } from '../api/api';

const GET_CATEGORY_CATS = 'GET_CATEGORY_CATS';
const IS_LOADING = 'IS_LOADING';

type CategoryStateType = {
    categoryCats: CatItemType[] | null;
    isLoading: boolean
}
let initialState: CategoryStateType = {
    categoryCats: [],
    isLoading: true,
}

export type GetCategoryCatActionType = {
    type: typeof GET_CATEGORY_CATS;
    categoryCats: CatItemType[]
}
export type IsLoadingActionType = {
    type: typeof IS_LOADING;
    isLoading: boolean
}
export type Actions = GetCategoryCatActionType | IsLoadingActionType;

const categoryReducer = (state = initialState, action: Actions): CategoryStateType => {
    switch (action.type) {

        case GET_CATEGORY_CATS: {
            return {
                ...state,
                categoryCats: action.categoryCats
            }
        }

        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default: return state
    }
}

export const getCategoryCats = (categoryCats: CatItemType[]): GetCategoryCatActionType => {
    return {
        type: GET_CATEGORY_CATS,
        categoryCats
    }
}
export const setIsLoading = (isLoading: boolean): IsLoadingActionType => {
    return {
        type: IS_LOADING,
        isLoading
    }
}
export const getCategoryCatsThunk = (categoryId: string): ThunkAction<Promise<void>, AppStateType, unknown, Actions> => {
    return async (dispatch, getState) => {
        try {
            dispatch(setIsLoading(true));
            todoAPI.getCatByCategories(categoryId).then(response => {
                dispatch(getCategoryCats(response.data))
            })
            dispatch(setIsLoading(false))
        } catch (error) {
            console.log(error)
        }
    }
}



export default categoryReducer;