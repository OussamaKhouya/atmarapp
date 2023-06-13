import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Theme} from "../../shared/data-access/models/Theme";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  getAgGridTheme(theme: any) {
    return theme[theme.mode].ag_grid;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  setTheme(theme: Theme) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    const key = theme.mode as string;
    themeLink.href = (theme[key as keyof Theme] as {style:string}).style + '.css';
  }
}
