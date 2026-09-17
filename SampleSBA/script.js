// // Task 1 sample data
// const sampleData = {
//   id: 1,
//   title: "The Lantern Orchard",
//   author: "Mere Kingsley",
//   year: 2019,
//   genre: "Literary Fiction",
//   description:
//     "In a valley orchard lit each autumn by paper lanterns, three generations of the Tuhoro family gather to settle an inheritance that is less about land than about who gets to tell the family's story. Kingsley's slow-burning novel moves between the orchard's founding in the 1950s and its uncertain present, asking what we owe the people who planted trees they would never see fruit.",
//   cover_url: "https://bit-pro.github.io/exam-data-x7k2q9/covers/1.svg",
// };

// Tasks 1, 3, 4 and 6: your JavaScript goes here

// TASK 1
// Create the featured book

const featured = document.getElementById("featured");

featured.innerHTML = `
    <img src="${sampleData.cover_url}" alt="Book cover for The Lantern Orchard">
    <div class="featured-info">
        <h2>${sampleData.title}</h2>
        <p class="meta"${sampleData.author} · ${sampleData.year} · ${sampleData.genre}></p>
        <p class="description">${sampleData.description}</p>
        <button id="toggle-desc">Show more</button>
    </div>
`;
// TASK 3
// Show more / show less

const button = document.getElementById("toggle-desc");
const description = document.querySelector("#featured .description");

button.addEventListener("click", () => {
  description.classList.toggle("show");

  if (description.classList.contains("show")) {
    button.textContent = "Show less";
  } else {
    button.textContent = "Show more";
  }
});
async function loadBooks() {
  const response = await fetch("https://bit-pro.github.io/exam-data-x7k2q9/books.json");
  const data = await response.json();

  const cardGrid = document.getElementById("card-grid");
  let cards = "";

  data.forEach((book) => {
    cards += `
            <article class="card">
                <img src="${book.cover_url}" alt="Book cover for ${book.title}">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.year}</p>
                <p>${book.genre}</p>
                <p class="description">${book.description}</p>
            </article>
        `;
  });

  cardGrid.innerHTML = cards;
}

loadBooks();
// TASK 6
// Show/hide card descriptions

const checkbox = document.getElementById("show-descriptions");

checkbox.addEventListener("change", () => {
  const descriptions = document.querySelectorAll("#card-grid .description");
  descriptions.forEach((description) => {
    description.classList.toggle("show", checkbox.checked);
  });
});
