let btn=document.querySelector('#sumbit');
let input=document.querySelector('#input');
// let temperature=document.querySelector('#temperature')
const options = {
    method: 'GET',
 
};
const getWether=(input)=> {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5c2364d68570cdf4767080ac952d0d2b`, options).then(response => response.json()).then(result => {
    console.log(result)

forecast(result);
detail(result);
card(result);
// check(result);

}).catch(err => console.error(err))

}


// function check(result){
//     console.log(result.name);
//     console.log(sd);
// }

btn.addEventListener('click',function(e){
    getWether(input.value)
    
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




