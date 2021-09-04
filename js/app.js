const API_KEY = `f1dcbe6b44196310999d69bbf08366a9
`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparesure(data));
}


const setinnerText =(id,text) =>{
    document.getElementById(id).innerText=text; 
}


const displayTemparesure = temparesure => {
    setinnerText('city',temparesure.name);
    setinnerText('temperature',temparesure.main.temp);
    setinnerText('condition',temparesure.weather[0].main);
// set wether icon

const url=`http://openweathermap.org/img/wn/${temparesure.weather[0].icon}@2x.png`;
const imgIcon = document.getElementById('weather-icon');
imgIcon.setAttribute('src',url);


}