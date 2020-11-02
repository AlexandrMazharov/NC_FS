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

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
@Injectable()
export class MainComponent implements OnInit {
  weatherService: WeatherService;
  currentMetric: FormControl;
  _place: string;
  _weather: any;
  public currentLng;
  img: string;
  public colectionImg: any;

  @Input() isMetric;
  public isNotFoundedCity: boolean;


  public upperFirstChar(s: string): string {
    return (
      s.charAt(0).toUpperCase() + s.substr(1)
    );

  }

  @Input()
  set weather(weather: any) {
    this._weather = weather;
  }

  @Input()
  set inputCurrentLng(currentLng) {
    this.currentLng = currentLng;
  }

  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onChangedLanguage = new EventEmitter<String>();
  @Output() onChangedPlace = new EventEmitter<String>();


  changeLanguage(lng: string): any {
    this.currentLng = lng;
    this.onChangedLanguage.emit(lng);
    this.getW(this._place);
  }

  changeMetric(increased: any): any {
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

  changedPlace(newPlace): any {
    this._place = newPlace;
    this.getW(newPlace);
  }

  getImg(q: string): any {
    this.weatherService.getImg(q).then(r => r.json()).then(j => {
      this.colectionImg = j;
      console.log(j);
    });
  }

  getW(newPlace: string): any {
    console.log(this._place, this.isMetric, this.currentLng);
    this.weatherService.search(newPlace, this.isMetric, this.currentLng)
      .then(res => {
        this._weather = this.weatherService.weather;
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
