document.querySelector("button").addEventListener("click",()=>{
    let city = document.querySelector("input").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=51b10a9754f32f1519bb8dc54596523d&units=metric" 
    fetch(url).then((response)=>{
        return response.json();
    })
    .then((response)=>{
        console.log(response);
        document.querySelector(".box3 h1").innerHTML = response.main.temp + "°c";
        document.querySelector(".box4 h2").innerHTML = city[0].toUpperCase()+city.slice(1,city.length).toLowerCase();
        document.querySelector("#ws").innerHTML = response.wind.speed+"km/h";
        document.querySelector("#humidity").innerHTML = response.main.humidity+"%";
        let x = "images/"+response.weather[0].main.toLowerCase()+".png";
        document.querySelector(".box2 img").setAttribute("src",x);
        console.log(response.weather[0].main);
    })
    .catch((err)=>{
        console.log(err);
    })
})
