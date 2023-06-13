import { Component } from '@angular/core';
import {isAuthenticated} from "../../../auth/data-access/auth.selectors";
import {autoLogout} from "../../../auth/data-access/auth.actions";
import {AppState} from "../../../shared/data-access/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(isAuthenticated).subscribe(isAuth => {
      console.log(isAuth)
      if (!isAuth)
        this.store.dispatch(autoLogout())
    });
  }
  onLogout() {
    this.store.dispatch(autoLogout())
  }
}
