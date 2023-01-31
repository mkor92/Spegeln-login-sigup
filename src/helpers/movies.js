import fetch from "node-fetch";

const API_URL = "https://plankton-app-xhkom.ondigitalocean.app/api/movies";

export async function loadMovies() {
  const res = await fetch(API_URL);
  const payload = await res.json();

  return payload.data;
}
export async function loadMovie(id) {
  const res = await fetch(API_URL + "/" + id);
  const payload = await res.json();
  return payload.data;
}