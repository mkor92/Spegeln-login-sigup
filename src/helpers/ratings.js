import fetch from "node-fetch";

const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";
const API_MOVIE_REVIEW = "https://plankton-app-xhkom.ondigitalocean.app/api/movies";


export async function loadMovieRatings(id) {
  const res = await fetch(`${API_MOVIE_REVIEW}?filters[movie]=${id}/ratings`);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    id: item.id,
    rating: item.attributes.rating,
  }))
  return result;
}


//console.log(result);
//return result;

export async function loadAllRatings() {
  const res = await fetch(API_REVIEWS);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    id: item.id,
    rating: item.attributes.rating,
  }));
  console.log(result);
  return result;
}

loadAllRatings();


/*export async function getRating() {
  const res = await fetch(API);
  const payload = await res.json();
  for (let i = 0; i < payload.data.length; i++) {
    console.log(payload.data[i].attributes.rating);
  }
}

getRating();*/