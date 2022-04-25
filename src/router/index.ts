import React from "react";
import SingUp from "../pages/singUp/singUp";
import Targeting from "../pages/targeting/targeting";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    SINGUP = '/singup',
    TARGETING = '/targeting',
    CARUSELBLOCK = '/singup',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.SINGUP, element: SingUp},
    {path: RouteNames.TARGETING, element: Targeting},
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.SINGUP, element: SingUp},
    {path: RouteNames.TARGETING, element: Targeting}
]