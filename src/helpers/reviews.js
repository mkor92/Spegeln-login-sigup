import fetch from "node-fetch";

const API_URL_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadMovieReviews(id) {
  const res = await fetch(`${API_URL_REVIEWS}?filters[movie]=${id}`);
  const payload = await res.json();
  return payload.data;
}

export async function loadAllReviews() {
  const res = await fetch(API_URL_REVIEWS);
  const payload = await res.json();
  return payload.data;
}
