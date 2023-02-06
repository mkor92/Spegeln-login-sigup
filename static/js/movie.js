const screeningUI = document.querySelector('.screenings');
const path = window.location.pathname;

(async () => {
    const id = path.split('/').pop();
    const res = await fetch(`/api/movies/${id}/screenings`);
    const data = await res.json();

    let template = '<h2>Filmvisningar</h2>';
    data.map(screening => {
        const room = screening.attributes.room;
        let date = new Date(screening.attributes.start_time).toLocaleString();
        date = date.substring(0, date.length - 3);
        date = date.split(' ');

        template += `
        <li>
            <div>
                <h3>${room}</h3>
                <p>${date[0]}<span style="margin-left: 1rem;">${date[1]}</span></p>
            </div>
            <button>Boka</button>
        </li>
        `;
    });
    screeningUI.insertAdjacentHTML('beforeend', template)
})();