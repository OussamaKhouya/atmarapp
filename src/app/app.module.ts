import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoadingSpinnerComponent} from "./shared/ui/loading-spinner/loading-spinner.component";
import {ToastModule} from "primeng/toast";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {appReducer} from "./shared/data-access/app.state";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./auth/data-access/auth.effects";
import {SettingEffects} from "./settings/data-access/setting.effects";
import {NgxTranslateModule} from "./shared/feature/translate/translate.module";
import {environment} from "../environments/environment";
import {MessageService} from "primeng/api";
import {AppLayoutModule} from "./layout/app.layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    NgxTranslateModule,
    EffectsModule.forRoot([AuthEffects, SettingEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    ToastModule,
    LoadingSpinnerComponent,

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
