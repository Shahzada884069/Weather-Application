//d4421e1b55ba0854960d0eaa3c54c1d8
 async function weather()
{
  //window.alert('hii'); 
  let city_name =document.getElementById('search').value;
  let city = document.getElementById('city');
  let temp = document.getElementById('temp');
  let humid = document.getElementById('humid');
  let wind = document.getElementById('wind');
  
  let apikey ='d4421e1b55ba0854960d0eaa3c54c1d8' 
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;

if(city_name =="")
    {
window.alert('Please enter the city name');
return;
    }

  
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    humid.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "m/s";
  



}

