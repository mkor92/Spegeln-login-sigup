import fetch from "node-fetch";

const API = "https://plankton-app-xhkom.ondigitalocean.app/api/screenings";

export async function movieScreenings(id) {
    const res = await fetch(`${API}?filters[movie]=${id}`);
    const payload = await res.json();
    return payload.data;
}

export async function getAllScreenings() {
    const res = await fetch(API);
    const payload = await res.json();
    return payload.data;
}
