import fetch from "node-fetch";
const API = "https://plankton-app-xhkom.ondigitalocean.app/api";

const apiAdapter = {
  loadScreeningsStartpage: async () => {
    const res = await fetch(API + "/screenings?populate=movie");
    const payload = await res.json();
    return payload;
  },
  getMovieScreenings: async (movieId, page) => {
    if(page === 'all') {
      const res = await fetch(`${API}/screenings?filters[movie]=${movieId}`);
      const payload = await res.json();
      return payload;
    } else {
      const res = await fetch(`${API}/screenings?pagination[page]=${page}&pagination[pageSize]=5&filters[movie]=${movieId}`);
      const payload = await res.json();
      return payload;
    }
  }
};

export default apiAdapter;
