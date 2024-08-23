let btn=document.querySelector('#sumbit');
let input=document.querySelector('#input');
// let temperature=document.querySelector('#temperature')
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'ea41dc8b5fmsh176c23e10416a7bp1110edjsnf4bf8b5bbbbe',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};
const getWether=(input)=> {
fetch(`https://weather-api138.p.rapidapi.com/weather?city_name=${input}`, options).then(response => response.json()).then(result => {
    console.log(result)

forecast(result);
detail(result);
card(result);

}).catch(err => console.error(err))

}

btn.addEventListener('click',function(e){
    getWether(input.value)
    console.log(input.value)
})
getWether('mumbai')

function forecast(result){
    let icon= result.weather[0].icon
    let iconi = "https://openweathermap.org/img/wn/" +icon +".png";
    document.getElementById('img').src=iconi;
    console.log(icon)
}

function card(result){
    city.innerHTML = `${result.name}, ${result.sys.country} `;
    temperature.innerHTML = `${Math.floor(result.main.temp)-273} °C`
    clouds.innerHTML = `${result.weather[0].description}`;
}

function detail(result){
    UV.innerHTML =`${Math.floor(result.clouds.all)}%`;
    Feels.innerHTML = `${Math.floor(result.main.feels_like)-273} °C`;
    Humidity.innerHTML =  `${result.main.humidity}%`;
    Wind.innerHTML =   `${result.wind.speed.toFixed(1)} Km/h`;
    Visibility.innerHTML = `${result.visibility/1000} Km`;
    Air.innerHTML = `${result.main.pressure} hPa`

}




