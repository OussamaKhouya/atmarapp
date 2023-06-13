import {AUTH_STATE_NAME} from "../../auth/data-access/auth.selectors";
import {AuthState} from "../../auth/data-access/auth.state";
import {sharedReducer} from "./shared.reducer";
import {SHARED_STATE_NAME} from "./shared.selectors";
import {authReducer} from "../../auth/data-access/auth.reducer";
import {SharedState} from "./shared.state";
import {SETTING_STATE_NAME} from "../../settings/data-access/setting.selectors";
import {SettingState} from "../../settings/data-access/setting.state";
import {settingReducer} from "../../settings/data-access/setting.reducer";


export interface AppState {
  [SHARED_STATE_NAME]: SharedState
  [AUTH_STATE_NAME]: AuthState
  [SETTING_STATE_NAME]: SettingState
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
  [SETTING_STATE_NAME]: settingReducer,
}
