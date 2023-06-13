import {createReducer, on} from '@ngrx/store';
import {initialState} from "./setting.state";
import {getLanguagesSuccess, loadConfigSuccess} from "./setting.actions";


export const settingReducer = createReducer(
  initialState,
  on(getLanguagesSuccess, (state, actions) => {
    return {
      ...state,
      languages: actions.languages
    };
  }),
  on(loadConfigSuccess, (state, {settings}) => {
    return {
      ...state,
      languages: settings.languages,
      theme: settings.theme
    };
  })
);
