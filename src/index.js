let selectedCity = "America/New_York";

function updateCity(cityTimeZone) {
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone).format("h:mm:ss A");
    let cityDate = moment().tz(cityTimeZone).format(`MMMM, dddd Do`);
    let cityElement = document.querySelector("#city-row");
    cityElement.innerHTML = `
    <div class="col-6 col-city">
        <h2 id="col-city-name" class="col-city-name">${cityName}</h2>
        <div id="col-city-date" class="col-city-date">${cityDate}</div>
    </div>
    <div class="col-6 col-time">
        <div id="col-city-time" class="col-city-time">${cityTime}</div>
    </div>`
}

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", function (event) {
    selectedCity = event.target.value;
    updateCity(selectedCity);
});

updateCity(selectedCity);

setInterval(function () {
    updateCity(selectedCity);
}, 1000);
