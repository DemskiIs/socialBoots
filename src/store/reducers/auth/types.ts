import React from "react";
import { ITarget, IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    user: IUser;
    target: ITarget;
    error: string;
}

export enum AuthActionEnum {
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_USER = 'SET_USER',
    SET_TARGET = 'SET_TARGET',
    SET_ERROR = 'SET_ERROR'
}

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH
    payload: boolean;
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING
    payload: boolean
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER
    payload: IUser;
}

export interface SetTargetAction {
    type: AuthActionEnum.SET_TARGET
    payload: ITarget
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR
    payload: string
}

export type AuthAction = 
    SetIsAuthAction |
    SetUserAction |
    SetTargetAction |
    SetIsLoadingAction |
    SetErrorAction