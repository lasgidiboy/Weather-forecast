class OpenWeather{
    constructor() {
        this.apikey = '19213e20935ccbc19a1218597bcee75c';
    }
   async search(cityName){
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);
      
       const results = await response.json();
       return results;
    }
} 