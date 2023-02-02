const ui = document.querySelector(".screenings-startpage");

async function getScreenings() {
  const res = await fetch(`/api/screenings/startpage`);
  const data = await res.json();

  return data;
}
const data = getScreenings();

data.then((data) => {
  data.forEach((screening) => {
    console.log(screening.movie.title);
    const template = document.createElement("h2");
    template.innerHTML = ` <li>
    <div>
        <h3>${screening.movie.title}</h3>
        
    </div>
    
</li>`;
    ui.appendChild(template);
  });
});
