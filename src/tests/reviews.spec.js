import { describe, expect, test } from "@jest/globals";
import { loadMovieReviews } from "../helpers/reviews.js";

describe("loadMovieReviews()", () => {
  test("correct response format", async () => {
    const result = await loadMovieReviews(1);
    expect(Array.isArray(result)).toBeTruthy;
    expect(result).not.toBeUndefined();
    expect(result.data[0].attributes.comment).not.toBeUndefined();
    expect(result.data[0].attributes.rating).not.toBeUndefined();
    expect(result.data[0].attributes.author).not.toBeUndefined();
  });

  test("only 1 pagination page when page parameter is empty", async () => {
    const result = await loadMovieReviews(1);
    expect(result.meta.pagination.page).toEqual(1);
  });

  test("get less than 5 reviews", async () => {
    const result = await loadMovieReviews(1, 1);
    expect(result.data.length).toBeLessThan(6);
  });

  test("show pagination page 2", async () => {
    const result = await loadMovieReviews(1, 2);
    expect(result.meta.pagination.page).toEqual(2);
  });

  test("it there is 5 or more reviews, get 5, else get less than 5", async () => {
    const result = await loadMovieReviews(1, 1);
    if (result.meta.pagination.total >= 5) {
      expect(result.data.length).toEqual();
    } else {
      expect(result.data.length).toBeLessThan(5);
    }
  });
});
