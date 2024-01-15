class WeatherAPI {
    constructor() {
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "42e8ca46cd81dca5625e4c6aaee0462e";
    }

    async getWeatherInfo(cityName) {

        const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`);
        const data = await response.json();
        return data;

    }
}