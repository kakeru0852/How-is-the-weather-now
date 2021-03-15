"use strict";
async function callApi(city) {
  const cityName = city;
  const owmApiKey = "cae881c6b3fa27768202946d453871e2";
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      owmApiKey +
      "&units=metric" +
      "&lang=ja"
  );
  const data = await res.json();
  //   必要な要素を作り出す
  const container = document.querySelector(".container");
  const section = document.createElement("section");
  const items = document.createElement("div");
  items.classList.add("items");
  const name = document.createElement("h1");
  const todaysWeather = document.createElement("p");
  const todayTemp = document.createElement("p");
  todayTemp.classList.add("temp");
  items.appendChild(name);
  items.appendChild(todaysWeather);
  items.appendChild(todayTemp);
  section.appendChild(items);
  container.appendChild(section);
  //   通信が成功したら
  if (data) {
    //   都市の名前
    name.innerHTML = data.name;
    // 気温
    todayTemp.innerHTML = `${Math.floor(data.main.temp)}°`;
    // 天気を取得し、日本語に変換し、classによってそれぞれのimgを設定する
    if (data.weather[0].main === "Clear") {
      todaysWeather.innerHTML = "晴れ";
      section.classList.add("sunny");
    } else if (data.weather[0].main === "Rain") {
      todaysWeather.innerHTML = "雨";
      section.classList.add("rainny");
    } else if (data.weather[0].main === "Clouds") {
      todaysWeather.innerHTML = "曇り";
      section.classList.add("cloudy");
    } else if (data.weather[0].main === "Snow") {
      todaysWeather.innerHTML = "雪";
      section.classList.add("snowy");
    }
  }
}
callApi("tokyo");
callApi("gifu");
callApi("osaka");
callApi("sapporo");
