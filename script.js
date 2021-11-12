let button = document.querySelector("#searchButton")

async function getData(event) {
  event.preventDefault
  let textInput = document.querySelector("#inputBar").value
  const url = `https://api.mozambiquehe.re/bridge?version=5&platform=PS4&player=${textInput}&auth=JYf8OElOW4fh8NLAImbE`

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success")
      const apexHeading = document.querySelector('#apexHeader')
      apexHeading.innerHTML = `Leaderboards: ${res.name}`

    })
}

button.addEventListener("click", getData)
