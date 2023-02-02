const ui = document.querySelector(".screenings");
const reviewContainer = document.querySelector(".review-container");
const path = window.location.pathname;

async function getScreenings() {
  const id = path.split("/").pop();
  const res = await fetch(`/api/movies/${id}/screenings`);
  const data = await res.json();
  return data;
}

const data = getScreenings();

data.then((data) => {
  let template = "<h2>Filmvisningar</h2>";
  data.map((screening) => {
    const date = new Date(screening.attributes.start_time);
    const room = screening.attributes.room;

    template += `
            <li>
                <div>
                    <h3>${room}</h3>
                    <p>${date.toLocaleString()}</p>
                </div>
                <button>Boka</button>
            </li>
            `;
  });
  ui.insertAdjacentHTML("beforeend", template);
});

async function getReviews() {
  const id = path.split("/").pop();
  const res = await fetch(`/api/reviews/${id}`);
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
                    <p>${author}</p>
                            
                </div>
               
            </li>
            `;
  });
  reviewContainer.insertAdjacentHTML("beforeend", template);
});
