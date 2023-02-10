import fetch from "node-fetch";
const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function loadMovieRatings(id) {
  const res = await fetch(`${API_REVIEWS}?filters[movie]=${id}`);
  const payload = await res.json();
  const result = payload.data.map((item) => ({
    rating: item.attributes.rating,
  }));
    if (result.length >= 5) {
      let sum = result.reduce(function (a, b) {
        return a + b
      })
      let tempResult = sum / result.length;

      let finalResult = Math.round(tempResult * 10) / 10;

      console.log(finalResult);
    }
    else {
      //Funktion för hämtning av IMDB-betyg ska in här.
      console.log("IMDB-betyg");
    }
    return result;
    
  }
