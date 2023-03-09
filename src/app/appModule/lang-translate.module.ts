import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule, HttpBackend} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(http: HttpBackend) {
    return new MultiTranslateHttpLoader(http, [
     {prefix: "./assets/translate/includes/header/", suffix: ".json"},
      {prefix: "./assets/translate/home/", suffix: ".json"},
    ]);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpBackend]
            }
        })
  ]
})
export class LangTranslateModule { }
