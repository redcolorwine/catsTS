import { isLoading } from './homeReducer';
import { CatItemType } from "../types/types"
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './store';
import { todoAPI } from '../api/api';

const GET_BREEDS_CAT = 'GET_BREEDS_CAT';
const IS_LOADING = 'IS_LOADING';

export type BreedsStateType = {
    breedsCats: CatItemType[] | null;
    isLoading: boolean;
}

let initialState: BreedsStateType = {
    breedsCats: [],
    isLoading: true,
}

type GetBreedsCatsActionType = {
    type: typeof GET_BREEDS_CAT;
    breedsCats: CatItemType[];
}
type isLoadingActionType = {
    type: typeof IS_LOADING;
    isLoading: boolean;
}

export type Actions = GetBreedsCatsActionType | isLoadingActionType;

const breedsReducer = (state = initialState, action: Actions): BreedsStateType => {
    switch (action.type) {

        case GET_BREEDS_CAT: {
            return {
                ...state,
                breedsCats: action.breedsCats
            }
        }

        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        default: return state;
    }
}

export const getBreedsCats = (breedsCats: CatItemType[]): GetBreedsCatsActionType => {
    return {
        type: GET_BREEDS_CAT,
        breedsCats
    }
}
export const setIsLoading = (isLoading: boolean): isLoadingActionType => {
    return {
        type: IS_LOADING,
        isLoading
    }
}

export const getCatsByBreed = (breeds:string): ThunkAction<Promise<void>, AppStateType, unknown, Actions> => {
    return async (dispatch, getState) => {
        try {
            dispatch(isLoading(true))
            todoAPI.getCatByBreed(breeds).then(response => {
                dispatch(getBreedsCats(response.data))
            })

            dispatch(isLoading(false))

        } catch (error) {
            console.log(error)
        }
    }
}

export default breedsReducer;