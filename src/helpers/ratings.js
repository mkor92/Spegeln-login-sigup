import fetch from "node-fetch";

const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadMovieRatings(id) {
  const res = await fetch(`${API_REVIEWS}?filters[movie]=${id}`);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    id: item.id,
    rating: item.attributes.rating,
  }));
  console.log(result);
  return result;
}

export async function getAverage(id) {
  const res = await fetch(`http://localhost:5080/api/movies/${id}/ratings)`);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    rating: item.attributes.rating,
  }));
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    if (result.i.length >= 5) {
      let sum = 0;
      sum += rating / rating.length;
      sum = Math.round(sum * 10) / 10;
      console.log(sum);
    } else {
      //Funktion för hämtning av IMDB-betyg ska in här.
      console.log("IMDB-betyg");
    }
  }
}
getAverage();
