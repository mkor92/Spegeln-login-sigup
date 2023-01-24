export default function checkLocationForStyle() {
  if (
    location.pathname === "/restaurant" ||
    location.pathname === "/Uppgift2-Biograf/restaurant.html"
  ) {
    document.querySelector("#restaurant-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/movies" ||
    location.pathname === "/Uppgift2-Biograf/movies.html"
  ) {
    document.querySelector("#movies-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salons" ||
    location.pathname === "/Uppgift2-Biograf/salons.html"
  ) {
    document.querySelector("#salons-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/events" ||
    location.pathname === "/Uppgift2-Biograf/events.html"
  ) {
    document.querySelector("#events-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salon-a" ||
    location.pathname === "/Uppgift2-Biograf/salonA.html"
  ) {
    document.querySelector("#salon-A").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salon-a" ||
    location.pathname === "/Uppgift2-Biograf/salonB.html"
  ) {
    document.querySelector("#salon-B").style.textDecoration = "underline";
  }
}
