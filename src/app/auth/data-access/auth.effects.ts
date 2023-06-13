import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  autoLogin,
  autoLogout,
  loginStart,
  loginSuccess
} from "./auth.actions";
import {catchError, exhaustMap, map, mergeMap, of, tap} from "rxjs";

import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {setErrorMessage, setLoadingSpinner} from "../../shared/data-access/shared.actions";
import {AuthService} from "./auth.service";
import {AppConfig} from "../../settings/data-access/config.service";
import {AppState} from "../../shared/data-access/app.state";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginStart), exhaustMap((action: any) => {
      return this.authService.login(action.name, action.password).pipe(map((user) => {
        this.store.dispatch(setLoadingSpinner({status: false}))
        this.authService.setUserInLocalStorage(user)
        this.store.dispatch(setErrorMessage({message: ''}))
        return loginSuccess({user, redirect: true});
      }), catchError(errorResp => {
        this.store.dispatch(setLoadingSpinner({status: false}));
        const errorMessage = this.authService.getErrorMessage(errorResp.message);
        this.LangService
          .get(["error", "invalidPassword"])
          .subscribe({
            next: res => {
              this.messageService.clear();
              this.messageService.add({severity: 'error', summary: res.error, detail: res.invalidPassword});
            }
          })
        return of(setErrorMessage({message: errorMessage}))
      }))
    }))
  })

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(ofType(autoLogin), mergeMap((action) => {
      const user = this.authService.getUserFromLocalStorage();

      return of(loginSuccess({user, redirect: false}));
    }));
  });

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginSuccess), tap((action: any) => {
      if (action.redirect) this.router.navigate(['/']);
    }));
  }, {dispatch: false});

  logout$ = createEffect(() => {
    return this.actions$.pipe(ofType(autoLogout), map((action) => {
      this.authService.logout();
      this.router.navigate(['login']);
    }));
  }, {dispatch: false});

  // loadPermissions$ = createEffect(() => {
  //   return this.actions$.pipe(ofType(loginSuccess), exhaustMap(({user}) => {
  //     return this.authService.getPermissions(user.group).pipe(map((arrPermissions) => {
  //       this.store.dispatch(setLoadingSpinner({status: false}))
  //       const permissions = this.authService.formatPermissions(arrPermissions);
  //       return loadPermissionsSuccess({permissions});
  //     }))
  //   }))
  // })


  constructor(private actions$: Actions,
              private authService: AuthService,
              private appConfig: AppConfig,
              public LangService: TranslateService,
              private store: Store<AppState>,
              private router: Router,
              private messageService: MessageService) {
  }
}
