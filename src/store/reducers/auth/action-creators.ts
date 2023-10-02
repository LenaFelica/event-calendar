import { AppDispatch } from './../../index';
import { IUser } from "../../../models/IUser";
import { SetUserAction, AuthActionsEnum, SetAuthAction, SetIsPayloadingAction, SetErrorAction } from "./types";
import axios from 'axios';


export const AuthActionCreators = {
   setUser: (user: IUser): SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
   setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
   setIsLoading: (payload: boolean): SetIsPayloadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload}),
   setError: (payload: string): SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload}),

   //* async
   login: (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        
        setTimeout( async () => {
         const response = await axios.get<IUser[]>('./users.json');
         const mockUsers = response.data.find(user => user.username === username && user.password === password);
         if(mockUsers) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUsers.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUsers))
         } else {
          dispatch(AuthActionCreators.setError('Неверный логин или пароль'))
         }
         dispatch(AuthActionCreators.setIsLoading(false)) 
        }, 2000)
       
      }
      catch(e) {
         dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
      }
   },
   logout: () => async (dispatch: AppDispatch) => {
         localStorage.removeItem('auth');
         localStorage.removeItem('username');
         dispatch(AuthActionCreators.setIsAuth(false));
         dispatch(AuthActionCreators.setUser({} as IUser));
       }
}