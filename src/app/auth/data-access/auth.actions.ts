import {createAction, props} from '@ngrx/store';
import {User} from "../../shared/data-access/models/user";

export const LOGIN_START = "[auth page] login start";
export const LOGIN_SUCCESS = "[auth page] login success";

export const AUTO_LOGIN = "[auth page] auto login";
export const LOGOUT_ACTION = '[auth page] logout';

export const LOAD_PERMISSIONS = '[home page] load permissions';
export const LOAD_PERMISSIONS_SUCCESS = '[home page] load permissions success';


export const loginStart = createAction(LOGIN_START, props<{ name: string, password: string }>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User, redirect: boolean }>());


export const autoLogin = createAction(AUTO_LOGIN);
export const autoLogout = createAction(LOGOUT_ACTION);


export const loadPermissions = createAction(LOAD_PERMISSIONS, props<{ group: number }>());
export const loadPermissionsSuccess = createAction(LOAD_PERMISSIONS_SUCCESS, props<{ permissions: any }>());



