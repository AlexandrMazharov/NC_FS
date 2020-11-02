import {Component, OnInit, Injectable} from '@angular/core';
import {WeatherService} from 'src/app/weatherService/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
@Injectable()
export class AppComponent {
  public weather;
  public isMetric;
  public currentLng = 'en';
  private dataService;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  onChangedMetric(increased: any): any {
    this.isMetric = !this.isMetric;
    this.ngOnInit();
  }

  onChangedLanguage(newLng: string): any {
    this.currentLng = newLng;
    this.ngOnInit();
  }

  constructor(_dataService: WeatherService) {
    this.dataService = _dataService;
  }

  success(place: string): any {
    this.dataService.search(
      place,
      this.isMetric,
      this.currentLng);
    this.ngOnInit();
  }

  error(err): any {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  onChangedPlace(place): any {
    this.success(place);
  }

  private ngOnInit() {
  }
}

