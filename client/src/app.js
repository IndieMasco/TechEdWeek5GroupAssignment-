console.log("HELLO!")

const characterForm = document.getElementById("character");

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
    `;

    characterContainer.appendChild(characterDiv);
    });
}

getAndDisplayReviews();