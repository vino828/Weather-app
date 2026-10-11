const weatherData = {

    chennai: {
        temp: 32,
        condition: "Sunny",
        humidity: "65%",
        wind: "4.5 m/s",
        feels: "35°C",
        icon: "☀️"
    },

    coimbatore: {
        temp: 29,
        condition: "Cloudy",
        humidity: "70%",
        wind: "3.2 m/s",
        feels: "31°C",
        icon: "☁️"
    },

    bangalore: {
        temp: 25,
        condition: "Partly Cloudy",
        humidity: "72%",
        wind: "3.8 m/s",
        feels: "26°C",
        icon: "🌥️"
    },

    mumbai: {
        temp: 30,
        condition: "Rainy",
        humidity: "80%",
        wind: "5.2 m/s",
        feels: "33°C",
        icon: "🌧️"
    },

    delhi: {
        temp: 34,
        condition: "Sunny",
        humidity: "55%",
        wind: "4.0 m/s",
        feels: "36°C",
        icon: "☀️"
    },

    madurai: {
        temp: 33,
        condition: "Clear Sky",
        humidity: "60%",
        wind: "3.5 m/s",
        feels: "35°C",
        icon: "🌤️"
    },

    trichy: {
        temp: 31,
        condition: "Cloudy",
        humidity: "67%",
        wind: "3.0 m/s",
        feels: "33°C",
        icon: "☁️"
    },

    salem: {
        temp: 30,
        condition: "Partly Cloudy",
        humidity: "64%",
        wind: "3.7 m/s",
        feels: "32°C",
        icon: "🌥️"
    }

};


function searchWeather() {

    const input =
        document.getElementById("city");

    const city =
        input.value.trim().toLowerCase();

    const error =
        document.getElementById("error");


    /* Empty search */

    if (city === "") {

        error.innerText =
            "⚠️ Please enter a city name";

        return;
    }


    /* Find city */

    const data = weatherData[city];


    if (!data) {

        error.innerText =
            "❌ City not available. Try Chennai, Mumbai, Delhi...";

        return;
    }


    error.innerText = "✨ Weather updated!";


    /* City name */

    document.getElementById("cityName").innerText =
        city.charAt(0).toUpperCase() +
        city.slice(1);


    /* Weather */

    document.getElementById("temp").innerText =
        data.temp;

    document.getElementById("condition").innerText =
        data.condition;

    document.getElementById("humidity").innerText =
        data.humidity;

    document.getElementById("wind").innerText =
        data.wind;

    document.getElementById("feels").innerText =
        data.feels;

    document.getElementById("icon").innerText =
        data.icon;


    /* Date */

    const today = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").innerText =
        today.toLocaleDateString("en-US", options);

}


/* Enter key */

document
    .getElementById("city")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchWeather();

        }

    });
