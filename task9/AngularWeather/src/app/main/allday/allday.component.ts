import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-allday',
  templateUrl: './allday.component.html',
  styleUrls: ['./allday.component.scss'],
})
export class AlldayComponent implements OnInit {
  _current: any;
  _dt: any;
  _tempDay;
  _tempNight;
  _description;
  _iconUrl;
  _metricIcon;
  _currentlng;
  @Input()
  set isMetric(isMetric: any) {
    isMetric === true ? (this._metricIcon = '℃') : (this._metricIcon = '°F');
  }

  @Input()
  set currentLng(currentLng: any) {
    if (currentLng == 'ru') this._currentlng = 'ru-RU';
    if (currentLng == 'en') this._currentlng = 'en-EN';
  }

  // getLocale(lng: any){
  //    return lng.toLowerCase()+"-"+lng.toUpperCase();
  // }
  @Input()
  set current(current: any) {
    this._current = current;
    this._dt = this.upperFirstChar(
      new Date(current?.dt * 1000).toLocaleString(this._currentlng, {
        weekday: 'long',
      })
    );
    this._iconUrl = `http://openweathermap.org/img/wn/${this._current?.weather[0].icon}@2x.png`;
    this._tempDay = Math.floor(this._current?.temp.day);
    this._tempNight = Math.floor(this._current?.temp.night);
  }
  public upperFirstChar(str: any) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }
  constructor() {}

  ngOnInit(): void {}
}
