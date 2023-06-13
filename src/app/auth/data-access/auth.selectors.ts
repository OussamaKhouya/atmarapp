import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.state";


export const AUTH_STATE_NAME = "auth";

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, ({user}) => {
  return user ? true : false;

})

export const getUserName = createSelector(getAuthState, ({user}) => {
  if (user?.name)
    return user.name;
  return null;

})
export const getUserGroup = createSelector(getAuthState, ({user}) => {
  if (user == null) {
    return 0;
  }
  return user.group;
})

export const getTablePermissions = (tableName: string) => createSelector(getAuthState, ({permissions}) => {
  if (permissions)
    return permissions[tableName];
  return null;
})

