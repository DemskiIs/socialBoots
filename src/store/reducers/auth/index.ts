import { ITarget, IUser } from './../../../models/IUser';
import React from "react";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    isLoading: false,
    user: {} as IUser,
    target: {} as ITarget,
    error: ''

}

export default function authReducer
    (state = initialState, action: AuthAction): AuthState {

    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return { ...state, isAuth: action.payload }

        case AuthActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }

        case AuthActionEnum.SET_USER:
            console.log(action.payload)
            return { ...state, user: action.payload, isLoading: false }

        case AuthActionEnum.SET_TARGET:
            console.log(action.payload)
            return { ...state, target: action.payload, isLoading: false }

        case AuthActionEnum.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
}