let searchForum = document.querySelector('#searchbar');

async function getData(apexName) {
  // console.log("hi");
  const API_KEY = "JYf8OElOW4fh8NLAImbE";
  const DOMAIN = `https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${apexName}&auth=${API_KEY}`;
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
  apexData.innerHTML = ''

  let characterName = document.createElement("h2")
  characterName.innerText = character.name
  apexData.appendChild(characterName)

  let characterRank = document.createElement("h2")
  characterRank.innerText = character.rank.rankName
  apexData.appendChild(characterRank)

  let characterLevel = document.createElement("h2")
  characterLevel.innerText = character.level
  apexData.appendChild(characterLevel)

  // let characterBans = document.createElement("h2")
  // characterBans.innerText = character.bans.last_banReason
  // apexData.appendChild(characterBans)

}

searchForum.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.querySelector('#inputBar')
  let apexName = searchInput.value
  getData(apexName)

  // const consoleInput = document.querySelector('#inputConsole')
  // let consoleName = consoleInput.value
  // getData(consoleName)


})
