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
    // }).then((response) => {
    // if (response.ok) {
    // window.location.reload();
    // } else {
    //     console.error("Failed to submit the review.");
    // }
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

async function getAndDisplayRandomItem() {
    //When deploying to render, will need to write in the QUERY to handle that. For now, Localhost will be used
    const response = await fetch(
    "https://localhost:8080/randomitem"
    );
    const reviews = await response.json();

    const itemContainer = document.getElementById("item-container");


    items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-card");

    itemDiv.innerHTML = `
        <p>${item}</p>
        <p>${itemInfo}</p>
    `;

    itemContainer.appendChild(itemDiv);
    });
}



getAndDisplayRandomItem();
