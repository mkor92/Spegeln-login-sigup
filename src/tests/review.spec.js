


const mockReview = {
    author: "Erik",
    comment: "Super bra film",
    rating: 5,
};


async function mockFunction(body) {
    
      const res = await fetch(`/api/reviews/${movieId}`, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
}



describe("POST to api/reviews/:id", () => {
    test("status 200 if it is ok", async () => {
        const res = await mockFunction(mockReview)
            .post("/api/reviews/4")
            //.set("Content-Type", "application/json")
            .send({ ...mockReview });
        expect(res.statusCode).toBe(200);
    });    
});

