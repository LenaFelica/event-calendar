import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute {
   path: string;
   element: React.ComponentType;
   exact?: boolean;
}

export enum RouteNames {
   LOGIN = '/login',
   EVENT = '/'
}
//* и теперь это перечислние можно использовать это перечисление RouteNames
export const publicRoutes: IRoute[] = [
   {path: RouteNames.LOGIN, element: Login, exact: true}
]

export const privateRoutes: IRoute[] = [
   {path: RouteNames.EVENT, element: Event, exact: true}
]