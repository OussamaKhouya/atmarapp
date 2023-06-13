import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from "primeng/dropdown";
import {Languages} from "../../../shared/data-access/models/languages";
import {ChipModule} from "primeng/chip";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SelectButtonModule} from "primeng/selectbutton";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/data-access/app.state";
import {getSettings} from "../../data-access/setting.selectors";
import {setLoadingSpinner} from "../../../shared/data-access/shared.actions";
import {saveConfigStart} from "../../data-access/setting.actions";
import {SettingState} from "../../data-access/setting.state";

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, DropdownModule, FormsModule, ChipModule, ButtonModule, RippleModule, SelectButtonModule],
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  languages: { code: string, name: string }[] = [];
  selectedLang: { code: string, name: string } = {code: "", name: ""}
  selectedTheme: string = 'light';
  themes: any[];

  constructor(private store: Store<AppState>) {
    this.themes = [
      {label: 'light', value: 'light'},
      {label: 'dark', value: 'dark'}
    ];
  }

  mySettings!: SettingState;

  ngOnInit(): void {
    const obs = this.store.select(getSettings).subscribe({
      next: (res: SettingState) => {
        this.mySettings = {...res};
        if (res.languages) {
          this.languages = res.languages.list;
          let langName = String(res.languages?.list.filter(item => item.code === res.languages?.active)[0].name)
          this.selectedLang = {code: res.languages?.active, name: langName};
        }
        if (res.theme) {
          this.selectedTheme = res.theme.mode;
        }
      }
    })
    obs.unsubscribe();
  }


  saveChanges() {
    if (this.mySettings.theme && this.mySettings.languages) {
      let settings = {
        theme: {...this.mySettings.theme, mode: this.selectedTheme},
        languages: {...this.mySettings.languages, active: this.selectedLang.code}
      }
      this.store.dispatch(setLoadingSpinner({status: true}));
      this.store.dispatch(saveConfigStart({settings}))
    }

  }

//
//   selectTheme(arg0: string) {
//     throw new Error('Method not implemented.');
//   }
//
//   fonts: string[] = [
//     "sans-serif"
//     , "serif"
//     , "cursive"
//     , "Rockwell"
//     , "Batang"
//     , "Avanta Garde"
//     , "Arial Black"
//     , "Arial"
//     , "Aldhabi"
//     , "Brushstroke"
//   ]
//   // langList: { code: string, name: string }[] = this.appConfig.settings.languages.list;
//   chek = new FormControl();
//   // langControl = new FormControl(this.appConfig.settings.languages.active);
//   colorControl = new FormControl('Arial');
//   fontSizeControl = new FormControl(16, Validators.min(10));
//   selectedItems = [];
//   data!: Observable<any[]>;
//   color1 = new FormControl("#000");
//   color2 = new FormControl("#000");
//   heuteur1 = new FormControl(20);
//   heuteur2 = new FormControl(20);
//   options = this._formBuilder.group({
//     color: this.colorControl,
//     fontSize: this.fontSizeControl,
//   });
//
//   constructor(
//     // private dataService: DataService,
//     private _formBuilder: FormBuilder,
//     // private appConfig: AppConfig,
//   ) {
//   }
//
//
//   ngOnInit(): void {
//     // this.data = this.dataService.getAll("art");
//   }
//
//
//   enregistrer() {
//     this.changeLanguage();
//     // this.saveConfig(this.appConfig.settings);
//   }
//
// //save data to server
//   public saveConfig(config: object): void {
//     console.log(config);
//     // this.appConfig.saveConfig(config).subscribe({
//     //   next: (res) => {
//     //     //navigate to consulation page
//     //     //this.annulerEvent.emit();
//     //     console.log("config saved", res);
//     //   },
//     //   error: (error: HttpErrorResponse) => {
//     //     console.log("can't save config", error);
//     //   },
//     // });
//   }
//
//   changeLanguage() {
//     // this.appConfig.settings.languages.active = this.langControl.value;
//     // this.LangService.use(this.appConfig.settings.languages.active);
//     document.documentElement.style.setProperty('--backer',this.colorControl.value);
//   }
//
//   reset() {
//     // this.langControl.setValue('francai');
//     this.colorControl.setValue('Arial');
//     this.chek.setValue('false');
//   }

}
