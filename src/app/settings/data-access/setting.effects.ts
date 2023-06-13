import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, exhaustMap, map, of, tap} from "rxjs";

import {Store} from "@ngrx/store";
import {TranslateService} from "@ngx-translate/core";
import {setErrorMessage, setLoadingSpinner} from "../../shared/data-access/shared.actions";
import {AppConfig} from "../../settings/data-access/config.service";
import {AppState} from "../../shared/data-access/app.state";
import {loadConfigStart, loadConfigSuccess, navigateToHome, saveConfigStart} from "./setting.actions";
import {AuthService} from "../../auth/data-access/auth.service";
import {SettingState} from "./setting.state";
import {ThemeService} from "./theme.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SettingEffects {

  // getLanguages$ = createEffect(() => {
  //   return this.actions$.pipe(ofType(getLanguagesStart), exhaustMap((action) => {
  //     return this.appConfig.getLanguages().pipe(map((languages: Languages) => {
  //       this.store.dispatch(setErrorMessage({message: ''}))
  //       this.LangService.use(languages.active);
  //       this.store.dispatch(setLoadingSpinner({status: false}));
  //       return getLanguagesSuccess({languages});
  //     }), catchError(errorResp => {
  //       const errorMessage = "Can't load active language";
  //       return of(setErrorMessage({message: errorMessage}))
  //     }))
  //   }))
  // })

  getConfig$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadConfigStart), exhaustMap((action) => {
      return this.appConfig.getConfig().pipe(map((settings: SettingState) => {
        if (settings.languages) {
          this.LangService.use(settings.languages.active);
          console.log(settings.languages.active)
        }
        if (settings.theme) {
          this.themeService.setTheme(settings.theme);
        }
        this.store.dispatch(setLoadingSpinner({status: false}));
        return loadConfigSuccess({settings});
      }), catchError(errorResp => {
        const errorMessage = "Can't load active language";
        return of(setErrorMessage({message: errorMessage}))
      }))
    }))
  })

  saveConfig$ = createEffect(() => {
    return this.actions$.pipe(ofType(saveConfigStart), exhaustMap((action) => {
      return this.appConfig.saveConfig(action.settings).pipe(map((settings: SettingState) => {
        if (settings.languages) {
          this.LangService.use(settings.languages.active);
        }
        if (settings.theme) {
          this.themeService.setTheme(settings.theme);
        }
        this.store.dispatch(setLoadingSpinner({status: false}));

        return loadConfigSuccess({settings});
      }), catchError(errorResp => {
        const errorMessage = "Can't save configuaration";
        return of(setErrorMessage({message: errorMessage}))
      }))
    }))
  })

  navigateToHome$ = createEffect(() => {
    return this.actions$.pipe(ofType(navigateToHome), tap((action) => {
      this.router.navigate(['/']);
    }));
  }, {dispatch: false});


  constructor(private actions$: Actions,
              private authService: AuthService,
              private appConfig: AppConfig,
              public LangService: TranslateService,
              public themeService: ThemeService,
              private router: Router,
              private store: Store<AppState>) {
  }
}
