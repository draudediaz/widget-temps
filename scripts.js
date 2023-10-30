const temperatureBarcelona = document.getElementById("temperatureMini1");
const windBarcelona = document.getElementById("windMini1");
const imgBarcelona = document.getElementById("imageMini1")
const temperatureLondon = document.getElementById("temperatureMini2");
const windLondon = document.getElementById("windMini2");
const imgLondon = document.getElementById("imageMini2");
const temperatureNewYork = document.getElementById("temperatureMini3");
const windNewYork = document.getElementById("windMini3");
const imgNewYork = document.getElementById("imageMini3");
const buttonSearch = document.getElementById("searchButton")
const searchLocation = document.getElementById("search-location")
const meteoTitle = document.getElementById("mainTitle")
const imageMain = document.getElementById("imageMain")
const infoWeatherMain = document.getElementById("infoWeatherMain")
const temperatureMain = document.getElementById("temperatureMain")
const windMain = document.getElementById("windMain")
const weatherMain = document.getElementById("weatherMain")


function chooseWeatherImage (number, isday){
  if(isday === 1){
    if (number===0){return "sun.png"}
    else if (number===1 || number===2){return "cloudy.png"}
    else if (number===3) {return "cloud.png"}
    else if (number===45 || number===48) {return "fog.png"}
    else if (number===51 || number===53 || number===55 || number===56 || number===57 || number===61 || number===63 || number===65 || number===66 || number=== 67 || number===80 || number===81 || number===82){return "rain.png"}
    else if (number===71 || number===73 || number===75 || number===77 || number===85 || number===86) {return "snow.png"}
    else if (number===95 || number===96 || number===99){return "thunderstorm.png"}
  }
  else if (isday=== 0){
    if (number===0){return "moon.png"}
    else if (number===1 || number===2){return "ncloudy.png"}
    else if (number===3) {return "cloud.png"}
    else if (number===45 || number===48) {return "fog.png"}
    else if (number===51 || number===53 || number===55 || number===56 || number===57 || number===61 || number===63 || number===65 || number===66 || number=== 67 || number===80 || number===81 || number===82){return "nrain.png"}
    else if (number===71 || number===73 || number===75 || number===77 || number===85 || number===86) {return "nsnow.png"}
    else if (number===95 || number===96 || number===99){return "nthunderstorm.png"}
}
}

function chooseWeatherInfo (number){
  if (number===0){return "Clear sky"}
  else if (number===1 || number===2){return "Partly Cloudy"}
  else if (number===3) {return "Overcast"}
  else if (number===45 || number===48) {return "Fog"}
  else if (number===51 || number===53 || number===55 || number===56 || number===57 || number===61 || number===63 || number===65 || number===66 || number=== 67 || number===80 || number===81 || number===82){return "It's raining"}
  else if (number===71 || number===73 || number===75 || number===77 || number===85 || number===86) {return "It's snowing"}
  else if (number===95 || number===96 || number===99){return "Thunderstorm"}
}

function showMeteo(){
  const city = searchLocation.value
  const urlGeo = `https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=3edaaa8132b448069ae0406d7f58cd64`
  
  var requestOptions = {
    method: 'GET',
  };
  
   const url = fetch(urlGeo, requestOptions)
    .then(response => response.json())
    .then(data => {
      const lat = data.features[0].geometry.coordinates[1]
      const lon = data.features[0].geometry.coordinates[0]
      console.log(lat);
      console.log(lon);
      const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&forecast_days=1`;
      return fetch (url2, requestOptions);
    })
    .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo acceder a la API');
        }
        return response.json();
      })
      .then(data => {
        const mainTitle = city;
        const tempMain = data.current_weather.temperature
        const windForceMain = data.current_weather.windspeed
        const imageMainBig = chooseWeatherImage(data.current_weather.weathercode, data.current_weather.is_day)
        const infoWeather = chooseWeatherInfo (data.current_weather.weathercode)
        meteoTitle.innerHTML = `<h2>${mainTitle}</h2>`
        infoWeatherMain.innerHTML = `<p>${infoWeather}<p>`
        temperatureMain.innerHTML = `<p><i class="fa fa-thermometer"></i> ${tempMain}º</p>`;
        windMain.innerHTML = `<p><i class="fa fa-wind"></i> ${windForceMain} KM/H</p>`;
        imageMain.innerHTML = `<img src="images/${imageMainBig}" alt="" width="200px" height="auto">`
      })
      .catch(error => {
        console.error('Error:', error);
      });
      weatherMain.style.display = "block";
      
}

fetch("https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current_weather=true&forecast_days=1")
.then(response => {
    if (!response.ok) {
      throw new Error('No se pudo acceder a la API');
    }
    return response.json();
  })
  .then(data => {
    const tempBarna = data.current_weather.temperature
    const windBarna = data.current_weather.windspeed
    const imgBarna = chooseWeatherImage(data.current_weather.weathercode, data.current_weather.is_day)
    temperatureBarcelona.innerHTML = `<p><i class="fa fa-thermometer"></i> ${tempBarna}º</p>`;
    windBarcelona.innerHTML = `<p><i class="fa fa-wind"></i> ${windBarna} KM/H</p>`;
    imgBarcelona.innerHTML = `<img src="images/${imgBarna}" alt="" width="60px" height="auto">`
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current_weather=true")
.then(response => {
    if (!response.ok) {
      throw new Error('No se pudo acceder a la API');
    }
    return response.json();
  })
  .then(data => {
    const tempLondon = data.current_weather.temperature
    const windLN = data.current_weather.windspeed
    const imageLondon = chooseWeatherImage(data.current_weather.weathercode, data.current_weather.is_day)
    temperatureLondon.innerHTML = `<p><i class="fa fa-thermometer"></i> ${tempLondon}º</p>`;
    windLondon.innerHTML = `<p><i class="fa fa-wind"></i> ${windLN} KM/H</p>`;
    imgLondon.innerHTML = `<img src="images/${imageLondon}" alt="" width="60px" height="auto">`
  })
  .catch(error => {
    console.error('Error:', error);
  });

  fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current_weather=true")
  .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo acceder a la API');
      }
      return response.json();
    })
    .then(data => {
      const tempNy = data.current_weather.temperature
      const windNy = data.current_weather.windspeed
      const imageNy = chooseWeatherImage(data.current_weather.weathercode, data.current_weather.is_day)
      temperatureNewYork.innerHTML = `<p><i class="fa fa-thermometer"></i> ${tempNy}º</p>`;
      windNewYork.innerHTML = `<p><i class="fa fa-wind"></i> ${windNy} KM/H</p>`;
      imgNewYork.innerHTML = `<img src="images/${imageNy}" alt="" width="60px" height="auto">`
    })
    .catch(error => {
      console.error('Error:', error);
    });

    buttonSearch.addEventListener("click", showMeteo)