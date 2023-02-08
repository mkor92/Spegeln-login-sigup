import fetch from "node-fetch";

const API_URL_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadMovieReviews(id, query) {
  let res = "";
  if (query.page != undefined) {
    res = await fetch(
      `${API_URL_REVIEWS}?filters[movie]=${id}&pagination[page]=${query.page}&pagination[pageSize]=5`
    );
  } else {
    res = await fetch(`${API_URL_REVIEWS}?filters[movie]=${id}`);
  }
  const payload = await res.json();
  return payload;
}

export async function loadAllReviews() {
  const res = await fetch(API_URL_REVIEWS);
  const payload = await res.json();
  return payload;
}
