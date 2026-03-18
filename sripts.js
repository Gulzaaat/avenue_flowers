const apiURL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
const heroImage = document.getElementById("hero-image");
const heroName = document.getElementById("hero-name");
const heroDetails = document.getElementById("hero-details");
const randomButton = document.getElementById("random-button");

async function fetchHeroes() {
  try {
    const response = await fetch(apiURL);
    const heroes = await response.json();
    return heroes;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    return [];
  }
}

function getRandomHero(heroes) {
  const randomIndex = Math.floor(Math.random() * heroes.length);
  return heroes[randomIndex];
}

function displayHero(hero) {
  heroImage.src = hero.images.md || "";
  heroImage.alt = hero.name || "Hero Image";
  heroName.textContent = hero.name || "Unknown Hero";

  const details = [
    `Full Name: ${hero.biography.fullName || "N/A"}`,
    `Alignment: ${hero.biography.alignment || "N/A"}`,
    `Publisher: ${hero.biography.publisher || "N/A"}`,
    `First Appearance: ${hero.biography.firstAppearance || "N/A"}`,
    `Intelligence: ${hero.powerstats.intelligence || "N/A"}`,
    `Strength: ${hero.powerstats.strength || "N/A"}`,
    `Speed: ${hero.powerstats.speed || "N/A"}`,
    `Durability: ${hero.powerstats.durability || "N/A"}`,
    `Power: ${hero.powerstats.power || "N/A"}`,
    `Combat: ${hero.powerstats.combat || "N/A"}`
  ];

  heroDetails.innerHTML = details.map(detail => `<li>${detail}</li>`).join("");
}

async function init() {
  const heroes = await fetchHeroes();

  function updateRandomHero() {
    const randomHero = getRandomHero(heroes);
    displayHero(randomHero);
  }

  randomButton.addEventListener("click", updateRandomHero);

  // Display an initial random hero
  updateRandomHero();
}

init();
