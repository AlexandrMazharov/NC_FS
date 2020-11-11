import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {WeatherService} from './weatherService/weather.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [WeatherService, ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
