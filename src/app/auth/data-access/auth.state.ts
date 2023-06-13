import {Permission} from "../../shared/data-access/models/permission";
import {User} from "../../shared/data-access/models/user";

export interface AuthState {
  user: User | null;
  permissions: { [key: string]: Permission } | null;
}

export const initialState: AuthState = {
  user: null,
  permissions: null,
}
