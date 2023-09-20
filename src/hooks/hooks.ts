import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, AppStateType } from "../redux/store";

import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
