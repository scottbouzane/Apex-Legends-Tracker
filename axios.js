const DOMAIN = `https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${textInput}&auth=${API_KEY}`;
const API_KEY = "JYf8OElOW4fh8NLAImbE"
const BASE_URL = '${DOMAIN}?apikey=${API_KEY}&s=';

const button = document.querySelector("#searchButton");

const getData = () => {
  axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${textInput}&auth=${API_KEY}`).then(response => {
    console.log(response);
  });
};

const sendData = () => { };

button.addEventListener("click", getData)





  // / let button = document.querySelector("#searchButton")

// async function getData(event) {
//   event.preventDefault
//   let textInput = document.querySelector("#inputBar").value
//   const url = `https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${textInput}&auth=${API_KEY}`

//   fetch(url)
//     .then(res => {
//       return res.json();
//     })
//     .then(res => {
//       console.log("success")
//       const apexHeading = document.querySelector('#apexHeader')
//       apexHeading.src = `Leaderboards: ${res.arena}`
//       return arena;

//     })
// }

// button.addEventListener("click", getData)
