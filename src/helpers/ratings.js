import fetch from "node-fetch";
const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";
const IMDB_API= "https://www.omdbapi.com/?apikey=81d6c4d0"


export async function loadMovieRatings(id) {
  const res = await fetch(`${API_REVIEWS}?filters[movie]=${id}&populate=movie`);
  const payload = await res.json();

  const result = payload.data.map(review => (review.attributes.rating));
  if (result.length >= 5) {
    let sum = result.reduce((a, b) => {
      return a + b
    });

    let tempResult = sum / result.length;
    let finalResult = Math.round(tempResult * 10) / 10;

    console.log(finalResult);
  } else {
    console.log("IMDB-betyg");
  }
  return result;
    
}
