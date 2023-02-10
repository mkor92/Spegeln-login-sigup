import fetch from "node-fetch";
const API_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";


                                        //i=imdbID //Alltid samma nyckel
const IMDB_URL= "https://www.omdbapi.com/?i=      apikey=81d6c4d0"


export async function loadMovieRatings(id) {
  const res = await fetch(`${API_REVIEWS}?filters[movie]=${id}`);
  const payload = await res.json();
  const result = payload.data.map((item) => (
    item.attributes.rating));
    if (result.length >= 5) {
      let sum = result.reduce(function (a, b) {
        return a + b
      })
      let tempResult = sum / result.length;

      let finalResult = Math.round(tempResult * 10) / 10;

      console.log(finalResult);
    }
    else {
        //IMDB-betyg
      
      console.log("IMDB-betyg");
    }
    return result;
    
  }
