import {createAction, props} from "@ngrx/store";
import {Languages} from "../../shared/data-access/models/languages";
import {SettingState} from "./setting.state";


export const LOAD_CONFIG_START = "GET ALL CONFIGURATION START";
export const LOAD_CONFIG_SUCCESS = "GET ALL CONFIGURATION SUCCESS";
export const loadConfigStart = createAction(LOAD_CONFIG_START);
export const loadConfigSuccess = createAction(LOAD_CONFIG_SUCCESS, props<{ settings: SettingState }>());


export const GET_LANGUAGES_START = '[home page] get list of languages and active language start';
export const GET_LANGUAGES_SUCCESS = '[home page] get list of languages and active language success';
export const getLanguagesStart = createAction(GET_LANGUAGES_START);
export const getLanguagesSuccess = createAction(GET_LANGUAGES_SUCCESS, props<{ languages: Languages }>());

export const SAVE_CONFIG_START = "SAVE ALL CONFIGURATION START";
export const saveConfigStart = createAction(SAVE_CONFIG_START, props<{ settings: SettingState }>());

//Navigations
export const NAVIGATE_TO_HOME = "NAVIGATE TO HOME";
export const navigateToHome = createAction(NAVIGATE_TO_HOME);

