import fetch from "node-fetch";
const API = "https://plankton-app-xhkom.ondigitalocean.app/api/screenings";

const apiAdapter = {
  loadScreeningsStartpage: async () => {
    const res = await fetch(API + "?populate=movie");
    const payload = await res.json();
    return payload;
  },
};

export default apiAdapter;
