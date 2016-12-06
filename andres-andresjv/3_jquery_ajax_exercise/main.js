/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for San Francisco (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

'use strict';

var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/city?id=5391959&APPID=";
var apiKey = "80255f56919df35f294d32453a8b00f8";

$.get(weatherUrl+apiKey, function(r) {
    var s = JSON.stringify(r);
    console.log(s);
});
