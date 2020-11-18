import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  Injectable,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {WeatherService} from '../weatherService/weather.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
@Injectable()
export class MainComponent implements OnInit {
  private weatherService: WeatherService;
  public currentMetric: FormControl;
  public _place: string;
  private _weather: Weather;
  public currentLng: string;
  public img: string;
  private collectionImg: object;
  public imgByDescription: string;
  @Input() isMetric;
  public isNotFoundedCity: boolean;


  public upperFirstChar(s: string): string {
    return (
      s.charAt(0).toUpperCase() + s.substr(1)
    );

  }

  @Input()
  set weather(weather: object) {
    this._weather = weather as Weather;
  }

  @Input()
  set inputCurrentLng(currentLng) {
    this.currentLng = currentLng;
  }

  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onChangedLanguage = new EventEmitter<String>();
  @Output() onChangedPlace = new EventEmitter<String>();


  public changeLanguage(lng: string): void {
    this.currentLng = lng;
    this.onChangedLanguage.emit(lng);
    this.getW(this._place);
  }

  public changeMetric(increased: boolean): void {
    this.isMetric = !this.isMetric;
    this.onChanged.emit(increased);
    this.getW(this._place);
  }


  constructor(public translate: TranslateService, weatherService: WeatherService) {
    this.weatherService = weatherService;
    translate.addLangs(['En', 'Ru']);
    translate.setDefaultLang('En');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/En|Ru/) ? browserLang : 'En');
  }

  ngOnInit(): void {
    this.currentMetric = new FormControl();
  }

  public changedPlace(newPlace): void {
    this._place = newPlace;
    this.getW(newPlace);
  }

  private getImg(q: string): void {
    this.weatherService.getImg(q).then(r => r.json()).then(j => {
      // this.collectionImg = j;
      this.collectionImg = j.images[0].url;
      console.log(j.images[0].url);
    });
    // this.imgByDescription = this.collectionImg.images[0].url;
  }
  private getW(newPlace: string): void {
    console.log(this._place, this.isMetric, this.currentLng);
    this.weatherService.search(newPlace, this.isMetric, this.currentLng)
      .then(res => {
        this.weather = this.weatherService.weather;
        console.log(this._weather);
        if (this._weather !== null) {
          this.isNotFoundedCity = true;
          this.img = `http://openweathermap.org/img/wn/${this._weather?.weather[0].icon}@2x.png`;
          this.getImg(this._weather.weather[0].description);
        } else {
          this.isNotFoundedCity = false;
        }
      });
  }
}
