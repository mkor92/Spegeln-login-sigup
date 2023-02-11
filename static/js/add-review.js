

/*
async function loadReview(movieId) {
  const res = await fetch("http://localhost:5080/api/reviews/" + movieId);
  let payload = await res.json();
  let reviews = payload.data;
  let arrayLength = payload.metaLength;
  console.log(reviews);
}; */


///loadReview from reviwies??

let movieId = location.pathname.split('/').pop();
let rate = document.querySelector("#rate");
let comment = document.querySelector("#addComment");
let authorName = document.querySelector("#addName");

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
  
  reviewContainer.insertAdjacentHTML("beforeend", template);
}





/*
async function sendComment(movieId) {
  //ev.preventDefault();

  rate = rate.value;
  comment = comment.value;
  authorName = authorName.value;

  await fetch(`/api/reviews/${movieId}`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId: movieId,
      comment: comment,
      rating: rate,
      author: authorName,
    }),
  });

  document.querySelector("#rate").selectedIndex = 0;
  document.querySelector("#addComment").value = "";
  document.querySelector("#addName").value = "";

  loadComment();
  //loadReview(); 
};*/

let sendBtn = document.querySelector("#addBtn");

sendBtn.addEventListener("click", async (ev) => {
    ev.preventDefault();
    rate = parseInt(rate.value);
  comment = comment.value;
  authorName = authorName.value;

  await fetch(`/api/reviews/${movieId}`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId: movieId,
      comment: comment,
      rating: rate,
      author: authorName,
    }),
  });

  document.querySelector("#rate").selectedIndex = "";
  document.querySelector("#addComment").value = "";
  document.querySelector("#addName").value = "";

  loadComment();
  //loadReview(); 


});
