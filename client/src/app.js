console.log("HELLO!")

const characterForm = document.getElementById("form");

characterForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(characterForm);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);

    fetch("https://techedweek5groupassignment.onrender.com/add-character", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
    }).then((response) => {
    if (response.ok) {
    window.location.reload();
    } else {
        console.error("Failed to submit the review.");
    }
    });
}

async function getAndDisplayReviews() {
    const response = await fetch(
    "https://techedweek5groupassignment.onrender.com/character"
    );
    const reviews = await response.json();

    const characterContainer = document.getElementById("character-container");

    reviews.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character-card");

    characterDiv.innerHTML = `
        <p>Name: ${character.name}</p>
        <p>Age: ${character.age}</p>
        <p>Gender: ${character.gender}</p>
        <p>Class: ${character.class}</p>
        <p>Race: ${character.race}</p>
        <p>Background: ${character.background}</p>
        <p>Alignment: ${character.alignment}</p>
        <p>Other: ${character.other}</p>
    `;

    characterContainer.appendChild(characterDiv);
    });
}

getAndDisplayReviews();

// ==== ITEM GENERATOR ====


  //==== ITEM GENERATOR ====



// item data
const items = [
  { item: "Alarm Chalk", itemInfo: "This shimmering chalk lets you draw lines or symbols that glow and emit a high-pitched alarm when crossed by a creature other than the one who drew it." },
 
  { item: "Candle of Darkness", itemInfo: "When lit, this candle casts a radius of utter darkness that normal light cannot penetrate." },

  { item: "Kinetic Sand - 500 grams", itemInfo: "This small bag contains a highly viscous sand that can be molded into various shapes and forms. It hardens when impacted." },

  { item: "Bread Box of Toasting", itemInfo: "A simple wooden box that can hold two slices of bread, which will always emerge perfectly toasted." },

  { item: "Chair of Collapsing", itemInfo: "This sturdy-looking wooden chair is designed to collapse into a heap of splintered wood the moment anyone tries to sit on it. Reforms once per day." },

  { item: "Horn of Invisibility", itemInfo: "A peculiar horn that, when blown, causes the user to become invisible, but only for as long as they hold the note." },

  { item: "Coin of Unplausible Odds", itemInfo: "When flipped, this coin has a 99% chance of landing on its edge." },

  { item: "Invisible Ring", itemInfo: "This ring is completely invisible to the naked eye and can only be found by touch." },
 
  { item: "Stick of Resist Water", itemInfo: "This ordinary-looking stick, when raised above the user’s head creates a small area of dryness around the wielder." },

  { item: "The Flute of Flatulence", itemInfo: "This small, wooden flute is expertly crafted, but its only function is to produce the sound of a series of different pitched farts." },

  { item: "Staff of Leaning", itemInfo: "This simple wooden staff has no magical properties other than its ability to always be perfectly balanced for leaning against a wall or in a corner." },

  { item: "Talisman of the FrostScorn Penguin", itemInfo: "Allows the user to take on the appearance of an emperor penguin. As long as they are not on ice." },

  { item: "Bell of Quiet", itemInfo: "When rung, this small silver bell dampens all sound within a 30-foot radius, creating a pocket of perfect silence." },

  { item: "Nevermelt", itemInfo: "This magical ice cube can be used to cool drinks or items without ever melting or losing its form." },

  { item: "Fortune Cockles", itemInfo: "These small, barnacle-like shells are rumored to contain a single ‘pearl’ that can grant a moment of luck (allow the user a roll with advantage)" },

  { item: "Chicken Arrows", itemInfo: "These special arrows, when shot, transform into a fully grown chicken upon impact, clucking loudly." },

  { item: "Mood Ring", itemInfo: "The colour of this ring changes according to the wearer's emotional state, but the changes are always exaggerated, complete with a faint glow." },

  { item: "Hammer of Flameless Forging", itemInfo: "This hammer is enchanted with a powerful spell that allows it to heat and shape metal without the need for a forge or open flame." },

  { item: "Tankard of Timeless Trickling", itemInfo: "This wooden tankard is enchanted to never fully empty, though it dispenses a slow, continuous trickle of whatever beverage is put into it." },

  { item: "Spoon of Stirring", itemInfo: "A simple-looking wooden spoon that, when used to stir a pot, can perfectly blend and mix ingredients without the need for manual effort." },

  { item: "Screaming Matches", itemInfo: "A black box of matches with ornate script advertising these as a prank item. Each match has a different colour head, when struck, the match screams 1-3 words at the point of ignition, and burns the same colour as its head." },

   { item: "Everburn", itemInfo: "This item when drawn immediately ignites, regardless of material. It does not damage the material, nor will the flame cause damage, however it does radiate a 30 foot radius of light around the user." },


  { item: "Sword of the Thespian", itemInfo: "An aged wooden sword with flaking paint used in a theatre for many a year. This item does not call upon the user's strength or dexterity, but the more convincing their performance with the item, the more damage it causes." },


  { item: "Boomerang of Loyalty", itemInfo: "This boomerang always comes back even after hitting an enemy. It may be immediately, it may be found in the wielder’s bedroll hours later. Regardless of how long, it always comes back." },


  { item: "The Gnomish Rocket-Punch Gauntlet: ", itemInfo: "A leather and brass gauntlet with a spring-loaded, retractable fist that can be launched at a foe" },


  { item: "The Quarterstaff of the Unseen Ladder: ", itemInfo: "A simple wooden staff that can, as a bonus action, create a series of invisible rungs up to 30 feet long, but only the wielder can see and use them." },


  { item: "The Flail of Forgotten Memories: ", itemInfo: "A spiked flail that, upon hitting a target, forces them to make a wisdom saving throw or forget a key memory, which can be something as simple as their name or as crucial as how to cast a spell." },


  { item: "The Javelin of the Mimic: ", itemInfo: "A small, wooden javelin that, when thrown, transforms into a miniature mimic that clings to the target and deals a small amount of acid damage over time." },


  { item: "The Polearm of the Poking Hand: ", itemInfo: "A long, slender polearm with a gauntleted hand at its tip that can extend up to 15 feet to give an enemy a firm, but not damaging, poke." },


  { item: "The Bow of the Unseen Hunter:", itemInfo: "This sleek, black bow is completely silent when fired, and the arrows it looses become invisible, leaving a faint, shimmering trail that only the user can see." },


  { item: "The Lantern Flail: ", itemInfo: "A bizarre flail with a lit lantern at the end of its chain. It sheds bright light and, upon a successful hit, can momentarily blind the target." },


  { item: "Bonded Blade", itemInfo: "This item is part of a pair of identical blades. The bearer of either knows the location of the other at all times." },


  { item: "Healing Dagger", itemInfo: "The hilt contains a crystalline fragment of a potion of healing, that when attuned to can heal the user once per day." },


  { item: "Rainbow Axe", itemInfo: "An axe with an oil slick shimmer to its metal. The wielder of this item can change the type of damage it outputs once per day." },


  { item: "Shattered Edge", itemInfo: "A destroyed long sword of legend, with it’s fragments said to be scattered. Whilst a short blade when found, if reforged, it may return to full power." },


  { item: "Thurible of Thrashing", itemInfo: "Whilst this appears to be a typical swinging incense burner, it is imbued with holy power, allowing it to be wielded like a flail, dealing extra damage against the unholy. Scent alternates depending on who the wielder’s deity is." },


  { item: "Butterfly Knife", itemInfo: "When wielded, a flutter of butterflies surround the user. The user’s ability to attract animals grants them some respect from the fae." },


  { item: "Chef’s Spit", itemInfo: "This strange spear appears to be a roasting spit, once wielded by an army chef. Mysteriously, it is not as heavy as one might expect, and any meat skewered onto it slowly cooks on its own accord." },


  { item: "Vaulting Pike", itemInfo: "A surprisingly sturdy spear that grants the user an increased jump distance. Its resilience makes it almost impossible to break by most humanoids." },


  { item: "Fetch", itemInfo: "A wooden baton that gives the wielder an advantage on being able to distract a creature from combat by throwing as if playing fetch with their dog." },


  { item: "Patch of Perplexing", itemInfo: "Perplexingly spelt for a perplexing eye patch. When worn, the wearer can see through it as if there is nothing impeding their view. Ranged attacks made whilst wearing this give an advantage against enemies who notice the patch." },

];



const itemButton = document.querySelector('itemButton')

const itemContainer = document.getElementById('item-container');

itemButton.addEventListener('click', displayRandomItem);

// random item endpoint
app.get("/randomItem", sendRandomItem);

function sendRandomItem(request, response) {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  response.json(randomItem);
}

  itemContainer.innerHTML = '';

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item-card");

  itemDiv.innerHTML = `
  <p>${randomItem.item}</p>
    <p>${randomItem.itemInfo}</p>
    `;

    itemContainer.appendChild(itemDiv);

displayRandomItem();


// async function getAndDisplayRandomItem() {
//     //When deploying to render, will need to write in the QUERY to handle that. For now, Localhost will be used
//     const response = await fetch(
//     "https://localhost:8080/randomitem"
//     );
//     const reviews = await response.json();

//     const itemContainer = document.getElementById("item-container");


//     items.forEach((item) => {
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("item-card");

//     itemDiv.innerHTML = `
//         <p>${item}</p>
//         <p>${itemInfo}</p>
//     `;

//     itemContainer.appendChild(itemDiv);
//     });

// getAndDisplayRandomItem();
