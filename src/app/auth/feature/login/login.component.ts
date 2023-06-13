import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

import {setLoadingSpinner} from "../../../shared/data-access/shared.actions";
import {loginStart} from "../../data-access/auth.actions";
import {AppState} from "../../../shared/data-access/app.state";
import {LayoutService} from "../../../layout/service/app.layout.service";

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, public layoutService: LayoutService) {
  }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;
    if (name && password) {
      this.store.dispatch(setLoadingSpinner({status: true}));
      this.store.dispatch(loginStart({name, password}));
    }
  }


}
