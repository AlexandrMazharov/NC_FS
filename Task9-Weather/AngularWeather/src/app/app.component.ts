import {Component, OnInit, Injectable} from '@angular/core';
import {WeatherService} from 'src/app/weatherService/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
@Injectable()
export class AppComponent {
  public weather: Weather;
  public isMetric: boolean;
  public currentLng: string = 'en';
  private dataService: WeatherService;

  public onChangedMetric(increased: object): void {
    console.log(typeof this.isMetric)
    this.isMetric = !this.isMetric;
  }

  public onChangedLanguage(newLng: string): void {
    this.currentLng = newLng;
  }

  public constructor(private _dataService: WeatherService) {
    this.dataService = _dataService;
  }

  private success(place: string): void {
    this.dataService.search(
      place,
      this.isMetric,
      this.currentLng);
  }

  private error(err): void {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  onChangedPlace(place): void {
    this.success(place);
  }
}

