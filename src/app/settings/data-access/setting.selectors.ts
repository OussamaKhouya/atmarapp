import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SettingState} from "./setting.state";


export const SETTING_STATE_NAME = "setting";

const getSettingState = createFeatureSelector<SettingState>(SETTING_STATE_NAME);

// Settings
export const getSettings = createSelector(getSettingState, (state) => {
  return state;
})

// Languages
export const getActiveLanguage = createSelector(getSettingState, ({languages}) => {
  if (languages)
    return languages.active;
  return null;
})


