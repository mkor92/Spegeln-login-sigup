import fetch from "node-fetch";

const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadMovieRatings(id) {
  const res = await fetch(`${API_REVIEWS}?filters[movie]=${id}`);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    id: item.id,
    rating: item.attributes.rating,
  }));
  return result;
}
