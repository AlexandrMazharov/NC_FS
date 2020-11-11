import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private APIKEY = '43fe13401509e1494a1a80c88243e12d';
  private _weather: Weather;

  get weather(): Weather {
    return this._weather;
  }

  public getImg(q : string): any {
    let url = `http://www.splashbase.co/api/v1/images/search?query=${q}`;
    return (window.fetch(url));
  }

  public search(city : string, isMetric : boolean, lng: string): any {
    let promise = new Promise((resolve, reject) => {

      let unit = '';
      if (isMetric) {
        unit = 'metric';
      } else {
        unit = '';
      }
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.APIKEY}&lang=${lng}&units=${unit}`;
      console.log(API);
      this.http.get(API)
        .toPromise()
        .then(
          res => {
            this._weather =  res as Weather;
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

  constructor(private http: HttpClient) {
  }
}
