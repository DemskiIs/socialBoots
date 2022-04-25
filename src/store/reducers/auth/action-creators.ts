import { AppDispatch } from './../../index';
import React from "react";
import { ITarget, IUser } from "../../../models/IUser";
import { AuthActionEnum, SetErrorAction, SetIsAuthAction, SetIsLoadingAction, SetTargetAction, SetUserAction } from "./types";

export const AuthActionCreators = {

    setIsAuth: (isAuth: boolean): SetIsAuthAction =>
    ({type: AuthActionEnum.SET_IS_AUTH, payload: isAuth}),

    setIsLoading: (isLoading: boolean): SetIsLoadingAction =>
    ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),

    setUser: (user: IUser): SetUserAction => 
    ({type: AuthActionEnum.SET_USER, payload: user}),

    setTarget: (target: ITarget): SetTargetAction =>
    ({type: AuthActionEnum.SET_TARGET, payload: target}),

    setError: (error: string): SetErrorAction =>
    ({type: AuthActionEnum.SET_ERROR, payload: error}),

    registration: (user: IUser) => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            if (1 == 1) {
                dispatch(AuthActionCreators.setUser(user))
                dispatch(AuthActionCreators.setIsAuth(true))
            } else {
                console.log('mistake !')
            }

        } catch (e) {
            dispatch(AuthActionCreators.setError("something wrong"))
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    }
}