import { handleActions } from "redux-actions";
import { IAuth } from "../../types";
import { AuthActions } from "../actions";

const initialState = null;

export const AuthReducer = handleActions<IAuth | null, IAuth>({
    [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
}, initialState);