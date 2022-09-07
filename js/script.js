const body = document.querySelector("body");
const submit = document.querySelector("#submit");
const inputValue = document.querySelector("#inputValue");
const container = document.querySelector(".container")
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const degrees = document.querySelector("#degrees");
const celcius = document.querySelector("#celcius")
const wicon = document.querySelector("#wicon");
const description = document.querySelector("#description");



async function loadCity () {
    try {
        const res = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&units=metric&appid=6957c055f4ee693a3bd81e65fcd0e67b");
        const data = await res.json();
        container.style.visibility = "visible";
        city.textContent = data.name;
        temp.innerHTML = Math.round(data.main.temp)+'<span id="celcius"><sup id="degrees">&deg;</sup>c</span>'
        let icon = data.weather[0].icon;
        wicon.src = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
        description.textContent = data.weather[0].description;
        inputValue.value = ""
    } catch (err) {
        container.style.visibility = "hidden";
        inputValue.value = ""
        alert("You have to type a valid City")
        err = "You have to type a valid City";
        console.log(err)
    }
}


submit.addEventListener("click",loadCity);


