function generateDomains() {
  let countryCode = document.getElementById("country-code").value;
  let niche = document.getElementById("niche").value;
  let tld = document.getElementById("tld").value;
  let cities = getCities(countryCode);
  let domains = [];
  for (let i = 0; i < cities.length; i++) {
    domains.push(niche + "." + cities[i].toLowerCase().replace(/\s+/g, "") + "." + tld);
  }
  displayDomains(domains);
}

function getCities(countryCode) {
  let cities = [
    // Add the list of cities for the specified country here
  ];
  return cities;
}

function displayDomains(domains) {
  let domainsList = document.getElementById("domains");
  domainsList.innerHTML = "";
  for (let i = 0; i < domains.length; i++) {
    let li = document.createElement("li");
    li.textContent = domains[i];
    domainsList.appendChild(li);
  }
}

document.getElementById("generate-button").addEventListener("click", generateDomains);
