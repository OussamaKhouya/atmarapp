import {createReducer, on} from '@ngrx/store';
import {initialState} from "./auth.state";
import {autoLogout, loadPermissionsSuccess, loginSuccess} from "./auth.actions";


export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),
  on(autoLogout, (state) => {
    return {
      ...state,
      user: null,
    };
  }),
  on(loadPermissionsSuccess, (state, actions) => {
    return {
      ...state,
      permissions: actions.permissions,
    };
  })
);
