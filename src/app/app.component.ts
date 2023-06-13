import { Component } from '@angular/core';
import {AppState} from "./shared/data-access/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getLoadingState} from "./shared/data-access/shared.selectors";
import {autoLogin} from "./auth/data-access/auth.actions";
import {loadConfigStart} from "./settings/data-access/setting.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoading$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.showLoading$ = this.store.select(getLoadingState);
    this.store.dispatch(autoLogin());
    this.store.dispatch(loadConfigStart())
  }
}
