setInterval(function () {
    let cityElement = document.querySelector("#city-row");
    let cityElementName = document.querySelector("#col-city-name");
    let cityElementDate = document.querySelector("#col-city-date");
    let cityElementTime = document.querySelector("#col-city-time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    let cityName = "Los Angeles";
    let cityDate = losAngelesTime.format(`MMMM, dddd Do`);
    let cityTime = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

    cityElementName.innerHTML = cityName;
    cityElementDate.innerHTML = cityDate;
    cityElementTime.innerHTML = cityTime;
}, 1000);

