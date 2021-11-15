# Project Overview

## Project Name

Apex Legends Stat Tracker

## Project Description

The Final Version of this project will invoke an apex legends api that returns career statistics of specific players by their user ID

Project inspiration [Apex Legends Tracker](https://apex.tracker.gg "Apex Legends Tracker")

## API and Data Sample

The apex api can be found at https://apexlegendsapi.com/

```"legends": {
"selected": {
"LegendName": "Gibraltar",
"data": [
{
"name": "Special event kills",
"value": 6573,
"key": "specialEvent_kills"
},
{
"name": "Special event wins",
"value": 372,
"key": "specialEvent_wins"
},
{
"name": "Gunshield damage blocked",
"value": 572655,
"key": "gunshield_damage_blocked"
}
```
## Wireframes

[My Wireframe](https://whimsical.com/getting-started-PiTFgVft4vYxVmTJRvPEL4 "Mock Website")



### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Build with HTML, CSS, and JavaScript
- Style using Flexbox 
- Use Axios to make a request with Apex API
- Implement responsive design using at least one media query/breakpoint
- Deploy site to github pages
- Make commits to github daily


#### PostMVP  

- Add second Apex API
- Style with more CSS 
- Add onto responsive design 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|Nov 6-7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 8| Project Approval | Complete
|Nov 9| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 10| Pseudocode / actual code | Complete
|Nov 11| Initial Clickable Model  | Complete
|Nov 12| MVP | I think
|Nov 15| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

[Priority Matrix](https://whimsical.com/49UgYuFsovtc1HTUjgmp3B "Priority Matrix")

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pseudo Code | M | 3hrs| 3hrs | 3hrs |
| HTML setup (Header,footer,div,tags etc.) | H | 2hrs| 2hrs | 2hrs |
| CSS setup (Margins, color, images, text import) | H | 2hrs| 3hrs | 3hrs |
| JS setup (adding function, button set up) | H | 3hrs| 4hrs | 4hrs |
| API setup | H | 4hrs| 5 | 5 |
| Debugging | H | 2.5hrs| 1.5 | 1.5 |
| DOM manipulation to retreive data from search results | H | 3hrs| 2hrs | 2hrs |
| CSS styling of search results | H | 3hrs| 2hrs | 2hrs |
| Responsive design | H | 3.5hrs| 2hrs | 2hrs |
| Debugging | H | 1.5hrs| 2hrs | 2hrs |
| Working with API for cross platform Data | H | 3hrs| 3.5hrs | 3.5hrs |
| Create ability to to compare players | H | 3hrs| 0hrs | 0hrs |
| Work on mobile version | H | 4hrs| 0hrs | 0hrs |
| Debug mobile | H | 1.5hrs| 0hrs | 0hrs |
| Post MVP work | H | 4hrs| 3hrs | 3hrs |
| Total | H | 43hrs|  |  |

## Code Snippet

This function is used to return data from the apex api while removing previous searched data to avoid clutter.   

```
function showCharacterData(character) {
  const apexData = document.querySelector('#apex-data')
  apexData.innerHTML = ''

  let characterName = document.createElement("h2")
  characterName.innerText = character.name
  apexData.appendChild(characterName)
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  