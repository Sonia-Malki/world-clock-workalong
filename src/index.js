function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");

  let losAngelesTime = moment().tz("America/Loa_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");

  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyDateElement = sydneyElement.querySelector(".date");

  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
