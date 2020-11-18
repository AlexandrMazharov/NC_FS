class Weather {
  base: string;
  clouds: object;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: mainWeather;
  name: string;
  snow: object;
  sys: Sys;
  timezone: object;
  visibility: number;
  weather: object;
  wind: object;

}

class Wind {
  speed: number;
  deg: number;

}

class Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;

}

class Coord {
  lon: number;
  lat: number;
}

class mainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;

}
