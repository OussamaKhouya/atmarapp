import {Permission} from "./permission";

export class User {
  code?: number;
  name?: string;
  group?: number;
  permissions?:Permission[];

  constructor(code: number, name: string, group: number, permissions?: Permission[]) {
    this.code = code;
    this.name = name;
    this.group = group;
    this.permissions = permissions;
  }
}
