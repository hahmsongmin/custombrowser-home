import axios from "axios";

class Api {
  constructor(key) {
    this.API_KEY = key;
    this.weather = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5/",
      params: {
        appid: this.API_KEY,
        units: "metric",
      },
    });
  }

  getWeather = async (lat, lon) => {
    const response = await this.weather.get("weather", {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  };
}

export default Api;
