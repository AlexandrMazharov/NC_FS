import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private APIKEY = '43fe13401509e1494a1a80c88243e12d';
  private _weather: Object;

  get weather(): Object {
    return this._weather;
  }

  public search(city, isMetric, lng) {
    let promise = new Promise((resolve, reject) => {

      let unit = '';
      if (isMetric) {
        unit = 'metric';
      } else {
        unit = '';
      }
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.APIKEY}&lang=${lng}&units=${unit}`;
      console.log(API);
      this._http.get(API)
        .toPromise()
        .then(
          res => {
            console.log(res);
            this._weather = res;
            resolve();
          },
          error => {
            this._weather = null;
            resolve();
          }
        );
    });
    return promise;
  }

  constructor(private _http: HttpClient) {
  }
}
