const unirest = require("unirest");
const express = require('express');
const bodyText = require('body-parser')

const app = express();
app.use(bodyText.urlencoded({extended:true})); //To use body parser with post request

//include all static files so we can use CSS
app.use(express.static( __dirname + '/public'));


//main page
app.get("/", function(req,res) {
	res.sendFile(__dirname +"/public/index.html" );
});

// Display the information when there is post request
app.post("/", function(request,response) {

  //Get the weather data
  const req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/weather");

  let city = request.body.city;
  // city = city + ", USA"  //Add country if needed

  req.query({
    "q": city,
    "lang": "en",
    "units": "imperial"
  });

// Update your API keys
  req.headers({
    "x-rapidapi-key": "b0ecde0aa7msh4000c55386b3d0ap1a619djsn5b8ac1b1b077",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "useQueryString": true
  });


req.end(function (res) {
    if (res.error) {
        response.send(`
            <h1>Could not get weather. Please enter a city:</h1> 
            <p>Error Details: ${res.error}</p>
            <a href="/">Try Again</a>
        `); //in case of error, request the user to re-enter
        return;
    }

 const data = res.body;
    const cityName = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const dailyRain = data.rain ? data.rain["1h"] : 0; // convert to %


    response.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Weather App</title>
          <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1 class="City">${cityName}</h1>
        <p class="temperature">Temperature: ${temp} °F</p>
        <p class="humidity">Humidity: ${humidity}%</p>
        <p class="condition">Current Condition: ${description}</p>
        <p class="rain">Rain Today: ${dailyRain}mm in the last hour</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}"> 
        <a href="/">Check another city</a>
      </body>
      </html>
    `); //Formats page to show more logical print out and pulls in picture from API
}); 
})
;

let port = process.env.PORT || 8002;
app.listen(port, function() {
    console.log (`Server running on port ${port}`); //updated to be able to run in render
})
