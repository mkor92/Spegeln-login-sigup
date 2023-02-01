import fetch from "node-fetch";

const API_URL_REVIEWS =
  "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadReviews() {
  const res = await fetch(API_URL_REVIEWS);
  const payload = await res.json();
  return payload.data;
}

