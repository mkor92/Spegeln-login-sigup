
movieId = location.pathname.split('/').pop();
let rate = document.querySelector("#rate");
let comment = document.querySelector("#addComment");
let authorName = document.querySelector("#addName");
reviewContainer = document.querySelector(".review-container");
let link = location.origin;

function loadComment() {
    rate = rate.value;
    comment = comment.value;
    authorName = authorName.value;
    let template = `
            <li>
                <div>
                    <h3>Betyg ${rate}</h3>
                    <p>${comment}</p>
                    <p class="review-author">${authorName}</p>
                            
                </div>   
            </li>
            `;
  
  reviewContainer.insertAdjacentHTML("beforeBegin", template);
}


let sendBtn = document.querySelector("#addBtn");

sendBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();

  const body = {
    "data": {
      comment: comment.value,
      rating: parseInt(rate.value),
      author: authorName.value,
    }
  }

  await fetch(`${link}/api/reviews`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body) ,
  });


  document.querySelector("#rate").selectedIndex = 0;
  document.querySelector("#addComment").value = "";
  document.querySelector("#addName").value = "";

  loadComment();

});
