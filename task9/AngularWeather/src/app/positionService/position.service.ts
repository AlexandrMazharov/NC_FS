import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';


@Injectable({
  providedIn: 'root'
})
export class PositionService {
  mytoken = '3f5d55806a506f';

  constructor(private http: HttpClient) {
  }

  public getIP() {
    return this.http.get('https://api.ipify.org?format=json');
  }

  public getAll() {
    return new Promise(function(getCurrentIpLocation, reject) {
      const url = 'https://api.ipify.org?format=json';
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          const error = new Error(this.statusText);
          reject(error);
        }
      };
    });
  }

  public getCurrentIpLocation(ip: String) {
    const API = `http://ipinfo.io/${ip}?token${this.mytoken}`;
    console.log(this.http.get(API));

  }
}


// return new Observable<any>((observable) => {
//
//     this.getIP().subscribe(data => {
//       const ip = data.ip;
//       const API = `http://ipinfo.io/${ip}?token${this.mytoken}`;
//
//       console.log(API);
//       observable.next(this.http.get(API));
//     });
//
//   }
// );




