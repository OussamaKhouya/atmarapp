import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../../../auth/feature/login/login.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
}]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class HomeModule {
}
