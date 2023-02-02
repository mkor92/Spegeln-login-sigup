const ul = document.querySelector(".movies-list");
const ul1 = document.querySelector(".movies-list1");
const ul2 = document.querySelector(".movies-list2");
const ul3 = document.querySelector(".movies-list3");
const ul4 = document.querySelector(".movies-list4");

async function getScreenings() {
  const res = await fetch(`/api/screenings/startpage`);
  const data = await res.json();

  return data;
}
const data = getScreenings();

data.then((data) => {
  data.forEach((screening) => {
    const date = new Date();
    function addDayToCurrentDate(days) {
      let currentDate = new Date();
      return new Date(currentDate.setDate(currentDate.getDate() + days));
    }
    const li = document.createElement("li");
    li.innerHTML = `<p class="date">${
      screening.start_time.split("T")[1].split(":00.")[0]
    }</p><a href="/movies/${screening.movie.id}"><img src="${
      screening.movie.image.url
    }" /></a>`;
    switch (true) {
      case screening.start_time.includes(date.toLocaleDateString()):
        li.classList.add("movies-list-item");
        ul.appendChild(li);
        break;
      case screening.start_time.includes(
        addDayToCurrentDate(1).toLocaleDateString()
      ):
        li.classList.add("movies-list-item");
        ul1.append(li);
        break;
      case screening.start_time.includes(
        addDayToCurrentDate(2).toLocaleDateString()
      ):
        li.classList.add("movies-list-item");
        ul2.append(li);
        break;
      case screening.start_time.includes(
        addDayToCurrentDate(3).toLocaleDateString()
      ):
        li.classList.add("movies-list-item");
        ul3.append(li);
        break;
      case screening.start_time.includes(
        addDayToCurrentDate(4).toLocaleDateString()
      ):
        li.classList.add("movies-list-item");
        ul4.append(li);
        break;
    }
  });
});
