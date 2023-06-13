import {Languages} from "../../shared/data-access/models/languages";
import {Theme} from "../../shared/data-access/models/Theme";

export interface SettingState {
  theme: Theme | null;
  languages: Languages | null;
}

export const initialState: SettingState = {
  theme: null,
  languages: null
}
