const reviewContainer = document.querySelector(".review-container");
const screeningUI = document.querySelector(".screenings");
const path = window.location.pathname;
const movieId = path.split('/').pop();

let currentPage = 1;
let pageCount;

async function renderScreenings() {
    const res = await fetch(`/api/movies/${movieId}/screenings?page=${currentPage}`);
    const payload = await res.json();
    const page = payload.meta.pagination.page;
    pageCount = payload.meta.pagination.pageCount;

    // Adds the header
    let template = `<h2>Filmvisningar ${pageCount > 1 ? `<span>Sida: ${page} av ${pageCount}</span></h2>` : `</h2>`}`;

    payload.data.map(screening => {
        const room = screening.attributes.room;
        let date = new Date(screening.attributes.start_time).toLocaleString();
        date = date.substring(0, date.length - 3);
        date = date.split(' ');

        // Adds the screenings
        template += `
        <li>
            <div>
                <h3>${room}</h3>
                <p>${date[0]}<span style="margin-left: 1rem;">${date[1]}</span></p>
            </div>
            <button>Boka</button>
        </li>`;
    });

    // Adds next and before buttons
    template += `
        ${pageCount > 1 ? 
            `<div class="btns">
                <button onclick="before()">Föregående</button>
                <button onclick="next()">Nästa</button>
            </div>` 
            : ``
        }
    `;
    screeningUI.insertAdjacentHTML('beforeend', template)
}
renderScreenings();

function next() {
    currentPage >= pageCount ? currentPage = 1 : currentPage++;
    screeningUI.style.height = `${screeningUI.offsetHeight}px`;
    screeningUI.classList.add('screeningsAnim');
    setTimeout(() => { screeningUI.classList.remove('screeningsAnim')}, 900)
    screeningUI.innerHTML = '';
    renderScreenings();
}
function before() {
    currentPage <= 1 ? currentPage = pageCount : currentPage--;
    screeningUI.style.height = `${screeningUI.offsetHeight}px`;
    screeningUI.classList.add('screeningsAnim');
    setTimeout(() => { screeningUI.classList.remove('screeningsAnim')}, 900)
    screeningUI.innerHTML = '';
    renderScreenings()
}

async function getReviews() {
  const res = await fetch(`/api/reviews/${movieId}`);
  const data = await res.json();
  return data;
}

const data2 = getReviews();

data2.then((data) => {
  let template = "<h2>Recensioner</h2>";
  data.map((review) => {
    let rating = review.attributes.rating;
    let comment = review.attributes.comment;
    let author = review.attributes.author;

    template += `
        <li>
            <div>
                <h3>Betyg ${rating}</h3>
                <p>${comment}</p>
                <p class="review-author">${author}</p>           
            </div> 
        </li>
        `;
  });
  reviewContainer.insertAdjacentHTML("beforeend", template);
  reviewContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="review-btn-container">
    <button class="next-btn">Nästa</button>
    <div> 
    `
  );
  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", nextReviewPage);
});

async function nextReviewPage() {
  reviewPage++;
  const res = await fetch(`/api/reviews/${movieId}?page=${reviewPage}`);
  const data = await res.json();
  renderNextPage(data);
}

function renderNextPage(data) {
  reviewContainer.innerHTML = "";
  let template = "<h2>Recensioner</h2>";
  data.map((review) => {
    let rating = review.attributes.rating;
    let comment = review.attributes.comment;
    let author = review.attributes.author;

    template += `
        <li>
            <div>
                <h3>Betyg ${rating}</h3>
                <p>${comment}</p>
                <p class="review-author">${author}</p>           
            </div> 
        </li>
        `;
  });
  reviewContainer.insertAdjacentHTML("beforeend", template);
  reviewContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="review-btn-container">
    <button class="previous-btn">Föregående</button>
    <button class="next-btn">Nästa</button>
    <div> 
     `
  );

  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", nextReviewPage);
  const previousBtn = document.querySelector(".previous-btn");
  previousBtn.addEventListener("click", previousReviewPage);
}

async function previousReviewPage() {
  reviewPage--;
  const res = await fetch(`/api/reviews/${movieId}?page=${reviewPage}`);
  const data = await res.json();

  renderNextPage(data);
}

function renderNextPage(data) {
  reviewContainer.innerHTML = "";
  let template = "<h2>Recensioner</h2>";
  data.map((review) => {
    let rating = review.attributes.rating;
    let comment = review.attributes.comment;
    let author = review.attributes.author;

    template += `
        <li>
            <div>
                <h3>Betyg ${rating}</h3>
                <p>${comment}</p>
                <p class="review-author">${author}</p>           
            </div> 
        </li>
        `;
  });
  reviewContainer.insertAdjacentHTML("beforeend", template);
  reviewContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="review-btn-container">
    <button class="previous-btn">Föregående</button>
    <button class="next-btn">Nästa</button>
    <div>
    `
  );

  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", nextReviewPage);
  const previousBtn = document.querySelector(".previous-btn");
  previousBtn.addEventListener("click", previousReviewPage);
}
