function menu_3bar() {
    let  m = document.querySelector(".menu_3bar");
    m.style.display === "block" ? m.style.display = "none" : m.style.display = "block";
    }

async function get_weatherdata(){
    const location = document.getElementById("location").value;
    const response = await
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=metric&key=KBB42DAYEDG75LUTHRLA5UBP3&contentType=json", {
            "method": "GET",
            "headers": {
            }
            });
    if (!response.ok) {
        console.error("Hiba:" + response.status);
        return;
    }
    const weatherdata = await
        response.json();
    console.log(weatherdata);
    document.querySelector("#city").innerHTML = weatherdata.address;
    document.querySelector("#temperature").innerHTML = weatherdata.currentConditions.temp + "°C";
    document.querySelector("#rain").innerHTML = weatherdata.currentConditions.precip + "mm";
    }