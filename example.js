var Weather = require("weather-zip");

weather = new Weather("YOUR_FORECASTIO_KEY");

weather.get("90210")
.then(function (data){
  console.log(data);
});
