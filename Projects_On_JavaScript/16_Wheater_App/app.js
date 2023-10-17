const apiKey = "d1cbc8ea233b87c6b2470a23b9e1e42a";

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        const data = await response.json()
        console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds") {
            document.querySelector(".weather-icon").src = "./images/clouds.png"
        }
        else if (data.weather[0].main === "Clear") {
            document.querySelector(".weather-icon").src = "./images/clear.png"
        }
        else if (data.weather[0].main === "Drizzle") {
            document.querySelector(".weather-icon").src = "./images/drizzle.png"
        }
        else if (data.weather[0].main === "Humidity") {
            document.querySelector(".weather-icon").src = "./images/humidity.png"
        }
        else if (data.weather[0].main === "Mist") {
            document.querySelector(".weather-icon").src = "./images/mist.png"
        }
        else if (data.weather[0].main === "rain") {
            document.querySelector(".weather-icon").src = "./images/rain.png"
        }
        else if (data.weather[0].main === "Snow") {
            document.querySelector(".weather-icon").src = "./images/snow.png"
        }
        else if (data.weather[0].main === "Wind") {
            document.querySelector(".weather-icon").src = "./images/wind.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}

searchBtn.addEventListener("click", () => {
    console.log("button clicked")
    checkWeather(searchBox.value);
})
