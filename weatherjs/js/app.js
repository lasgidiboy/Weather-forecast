//init
const getweather = new OpenWeather();

// Init UI
const ui = new UI();
// search city

const searchCity = document.querySelector('.searchCity');

//add event listener

searchCity.addEventListener('keyup', (event) => {

    //get input

    const usertext = event.target.value;
    console.log(usertext);

    // Make a request to Open weather API
    getweather.search(usertext).then(data => {
        console.log(data.weather[0].main);
        //Tem convertion
        const degC = data.main.temp - 273.15;
        const degCr = Math.floor(degC);
        const degF = degC * 1.8 + 32;
        const degFr = Math.floor(degF);

        results = {
            condtion: data.weather[0].main,
            icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
            degCr: Math.floor(degCr),
            degFr: Math.floor(degFr),
            city: data.name
        }

        ui.showResults(results);
    });
});