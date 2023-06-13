import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/feature/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/feature/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/feature/setting-page/setting-page.component').then(mod => mod.SettingPageComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
