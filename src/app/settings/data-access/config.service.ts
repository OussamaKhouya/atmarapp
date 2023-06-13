import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SettingState} from "./setting.state";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class AppConfig {

  public settings!: SettingState;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getConfig(): Observable<SettingState> {
    return this.http.get<SettingState>(`${this.apiServerUrl}/config/read`);
  }

  // public saveConfig(config: object): Observable<object> {
  //   return this.http.post<object>(`${this.apiServerUrl}/config/write`, config);
  // }

  public saveConfig(config: SettingState): Observable<SettingState> {
    return this.http.post<SettingState>(`${this.apiServerUrl}/config/write`, config);
  }

  // public getTablesConfig(): Observable<any> {
  //   return this.http.get<Settings>(`${this.apiServerUrl}/config/read`).pipe(map(config => ({
  //     tablesIndexes: config.tablesIndexes,
  //     tableDefs: config.tableDefs
  //   })));
  // }

}
