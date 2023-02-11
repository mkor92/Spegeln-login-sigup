
import fetch from "node-fetch";

const API_URL_REVIEWS = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function sendReview() {
    let date = new Date();
    let created = date.toISOString();
  const response = await fetch(
    API_URL_REVIEWS + "/" + movieId,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
            id: req.id,
            attributes: 
                {comment: req.body.comment,
                 rating: req.body.rating,
                 author: req.body.name,
                 verified: false,
                 createdAt: created,
                 movieID: movieId,
            }
        },
      }),
    }
  ).then((res) => {
    return res.json();
  });
  res.status(201).end();
};


/*
app.post("/api/:movieId/reviews", async (req, res) => {
    const response = await fetch(
      "https://plankton-app-xhkom.ondigitalocean.app/api/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            author: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating,
            movie: req.params.movieId,
          },
        }),
      }
    ).then((res) => {
      return res.json();
    });
    res.status(201).end();
  });

*/