/*

 Open source repository on GitHub: https://github.com/mervebilgin/WeatherApp

*/

const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'fde0757e25d5d3a1205f8552dff940b3'
const cityName = 'Gurgaon'

$.getJSON(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`, function(data) {
    $("#weather").html(`<i class="fa-regular fa-cloud-bolt-sun text-gray-500 inline-flex ml-1 mr-2"></i><span class="text-capitalize">${data.weather[0].description}</span> in ${data.name}`);
});