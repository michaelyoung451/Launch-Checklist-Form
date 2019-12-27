// Write your JavaScript code here!
window.addEventListener('load', function() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector('input[name=pilotName]');
   let copilotName = document.querySelector('input[name=copilotName]');
   let fuelLevel = document.querySelector('input[name=fuelLevel]');
   let cargoMass = document.querySelector('input[name=cargoMass]');

   

   form.addEventListener('submit', function(event) {
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let faultyItems = document.getElementById('faultyItems');
      let launchStatus = document.getElementById('launchStatus');

      if ((pilotName.value === '') || (copilotName.value === '') || (fuelLevel.value === '') || (cargoMass.value === '')) {
         alert('Every field required for submission!')
         event.preventDefault();
      }else if (isNaN(pilotName.value) === false) {
         alert('Pilot Name can not be a number')
         event.preventDefault();
      }else if (isNaN(copilotName.value) === false) {
         alert('Copilot Name can not be a number')
         event.preventDefault();
      }else if (isNaN(fuelLevel.value) === true) {
         alert('Fuel Level must be a number!')
         event.preventDefault();
      }else if (isNaN(cargoMass.value) === true) {
         alert('Cargo Mass must be a number!')
         event.preventDefault();
      }

      pilotStatus.innerHTML = `${pilotName.value} ready`
      copilotStatus.innerHTML = `${copilotName.value} ready`

      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel to complete journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red"
         event.preventDefault()
      }else if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red"
         event.preventDefault();
      }else{
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         event.preventDefault();
      }
   })
   
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         planetSelection = json[Math.floor(Math.random() * 6)]
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${planetSelection.name}</li>
            <li>Diameter: ${planetSelection.diameter}</li>
            <li>Star: ${planetSelection.star}</li>
            <li>Distance from Earth: ${planetSelection.distance}</li>
            <li>Number of Moons: ${planetSelection.moons}</li>
         </ol>
         <img src="${planetSelection.image}">
         `
      })
   })

})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!

<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
