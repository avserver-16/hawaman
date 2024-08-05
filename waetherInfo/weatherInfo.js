const apiKey="1620643396ef7da77a02939069315841";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const searchBar=document.querySelector(".topcase input");
const searchBtn=document.querySelector(".search-button");
const weatherIcon=document.querySelector(".weatherCondition")
let currTemp=document.querySelector(".temperature");
let currCity=document.querySelector(".city");
let perHum=document.querySelector(".numerical-info");
let windSpeed=document.querySelector("#speed");


async function weatherChecker(city){
   const response=await fetch(apiUrl+city+"&units=metric&appid="+apiKey);
 var data= await response.json();
   console.log(data);
   if(response.status=="404" || response.status=="400"){
    currTemp.innerText="No Data";
    currCity.innerText="Invallid City Name";
    perHum.innerText=`0%`;
    windSpeed.innerText="0";
    weatherIcon.src="D:/Avish/waetherInfo/images/error.png";
   }
   else{
    document.querySelector(".weatherPrecise").innerText=data.weather[0].main;
   currTemp.innerText=Math.round(data.main.temp)+"°C";
   currCity.innerText=data.name;
   perHum.innerText=`${data.main.humidity}%`;
   windSpeed.innerText=data.wind.speed;
   if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="D:/Avish/waetherInfo/images/drizzle.png";
   }
   else if(data.weather[0].main=="Clouds"){
    weatherIcon.src="D:/Avish/waetherInfo/images/clouds.png";
   }
   else if(data.weather[0].main=="Clear"){
    weatherIcon.src="D:/Avish/waetherInfo/images/clear.png";
   }
   else if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze" ){
    weatherIcon.src="D:/Avish/waetherInfo/images/mist.png";
   }
   else if(data.weather[0].main=="Rain"){
    weatherIcon.src="D:/Avish/waetherInfo/images/rain.png";
   }
   else if(data.weather[0].main=="Snow"){
    weatherIcon.src="D:/Avish/waetherInfo/images/snow.png";
   }
   else if(data.weather[0].main=="Sunny"){
    weatherIcon.src="D:/Avish/waetherInfo/images/sunny.png";
   }
  
  }
   console.log(data.weather[0].main);
   console.log(response.status);

}
searchBtn.addEventListener("click",()=>{
    weatherChecker(searchBar.value);
})
