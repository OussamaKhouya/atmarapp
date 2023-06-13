import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {CheckboxModule} from "primeng/checkbox";

import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {AutoFocusModule} from "primeng/autofocus";
import {ButtonModule} from "primeng/button";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule, Routes} from "@angular/router";
import {PasswordModule} from "primeng/password";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature(),
    TranslateModule,
    //primeNg
    CheckboxModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
    AutoFocusModule,
    PasswordModule
  ],

})
export class LoginModule {
}
