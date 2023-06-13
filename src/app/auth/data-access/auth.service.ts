import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Permission} from "../../shared/data-access/models/permission";
import {AppState} from "../../shared/data-access/app.state";
import {User} from "../../shared/data-access/models/user";
import {TABLES} from "../../shared/data-access/models/constants";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private store: Store<AppState>) {
  }

  login(name: string, password: string): Observable<User> {
    return this.http.post<User[]>(
      `${this.apiServerUrl}/get`,
      {
        name: TABLES.USER, columns: ["code", "name", "group"], conditions: [{
          column: "name", operation: "=", value: name
        }, {
          column: "pws", operation: "=", value: password
        }]
      }
    ).pipe(map((arrUsers) => {
      if (arrUsers.length != 0) {
        return arrUsers[0];
      }
      throw new Error("INVALID_PASSWORD");

    }));
  }

  public getUser(name: string, password: String): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiServerUrl}/get`, {
      name: TABLES.USER, columns: ["code", "name", "group"], conditions: [{

        column: "name", operation: "=", value: name
      }, {
        column: "pws", operation: "=", value: password
      }]
    });
  }

  public getPermissions(group: number | undefined): Observable<Permission[]> {
    let body = {
      name: TABLES.PERMISSION,
      columns: ["code", "group", "description", "add", "edit", "delete", "consultation", "print", "validation", "dvalidation"],
      conditions: [
        {
          column: "group", operation: "=", value: group
        }
      ]
    }
    return this.http.post<Permission[]>(`${this.apiServerUrl}/get`, body);


  }

  public getPermissionsbyTbl(group: number, tblName: string): Observable<Permission[]> {
    let body = {
      name: TABLES.PERMISSION,
      columns: ["code", "group", "description", "add", "edit", "delete", "consultation", "print", "validation", "dvalidation"],
      conditions: [
        {
          column: "group", operation: "=", value: group
        },
        {
          column: "description", operation: "=", value: tblName
        }
      ]
    }

    return this.http.post<Permission[]>(`${this.apiServerUrl}/get`, body);
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }


  logout() {
    localStorage.removeItem('userData');
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const user = JSON.parse(userDataString);
      return user;
    }
    return null;
  }

  formatPermissions(arrPermissions: Permission[]) {
    let newArr = {}
    arrPermissions.map((item: Permission) => {
      newArr = {...newArr, [String(item.description)]: item};
    });
    return newArr;
  }
}


