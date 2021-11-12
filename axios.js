let searchForum = document.querySelector('#searchbar');

async function getData(apexName) {
  // console.log("hi");
  const API_KEY = "JYf8OElOW4fh8NLAImbE";
  const DOMAIN = `https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${apexName}&auth=${API_KEY}`;
  try {
    const response = await axios.get(DOMAIN);
    let apex = response.data.global;
    console.log(apex);
    showCharacterData(apex);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
  }
}

function showCharacterData(character) {
  const apexData = document.querySelector('#apex-data')
  let characterName = document.createElement("h2")
  characterName.innerText = character.name
  apexData.appendChild(characterName)

}

searchForum.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.querySelector('#inputBar')
  let apexName = searchInput.value
  getData(apexName)

})







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
