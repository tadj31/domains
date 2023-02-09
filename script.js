const countrySelect = document.getElementById("country-select");
const cityList = document.getElementById("city-list");
const generateButton = document.getElementById("generate-button");
const tldInput = document.getElementById("tld-input");
const nicheInput = document.getElementById("niche-input");
const resultList = document.getElementById("result-list");

generateButton.addEventListener("click", function() {
  resultList.innerHTML = "";

  const selectedCountry = countrySelect.value;
  const tld = tldInput.value;
  const niche = nicheInput.value;

  const cities = cityList.value.split("\n");

  for (const city of cities) {
    const domain = `${niche}${city.toLowerCase().replace(/\s/g, '')}.${tld}`;
    const li = document.createElement("li");
    li.innerText = domain;
    resultList.appendChild(li);
  }
});
