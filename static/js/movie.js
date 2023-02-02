const ui = document.querySelector('.screenings');
const path = window.location.pathname;

async function getScreenings(){
    const id = path.split('/').pop();
    const res = await fetch(`/api/movies/${id}/screenings`);
    const data = await res.json();
    return data;
}

const data = getScreenings();

data.then(data => {
    let template = '<h2>Filmvisningar</h2>';
    data.map(screening => {
        console.log(screening.attributes)
        const date = new Date(screening.attributes.start_time);
        const room = screening.attributes.room;

        template +=
            `
            <li>
                <div>
                    <h3>${room}</h3>
                    <p>${date.toLocaleString()}</p>
                </div>
                <button>Boka</button>
            </li>
            `;
    });
    ui.insertAdjacentHTML('beforeend', template)
});