function menu_3bar() {
  let m = document.querySelector(".menu_3bar");
  m.style.display === "block"
    ? (m.style.display = "none")
    : (m.style.display = "block");
}

async function get_weatherdata() {
  const location = document.getElementById("location").value;
  let response, weatherdata;
  try {
    response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?unitGroup=metric&key=KBB42DAYEDG75LUTHRLA5UBP3&contentType=json",
      {
        method: "GET",
        headers: {},
      }
    );
    weatherdata = await response.json();
  } catch {
    console.error("Hiba:" + response.status);
    return;
  }
  console.log(weatherdata);
  document.querySelector("#set_location input").value = "";
  document.querySelector(".title_navbar").innerHTML = weatherdata.address + " - időjárása";
  document.querySelector("#temperature").innerHTML =
    weatherdata.currentConditions.temp + "°C";
  document.querySelector("#rain").innerHTML =
    weatherdata.currentConditions.precip + "mm";
  document.querySelector("#cloud").innerHTML =
    weatherdata.currentConditions.cloudcover + "%";
}
