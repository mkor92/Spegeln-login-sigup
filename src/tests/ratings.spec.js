import { describe, expect, test } from "@jest/globals";
import { loadMovieRatings } from "../helpers/ratings";
import { getMovieRatingsMock } from "../tests/ratings.mock.js";

describe('RATING', () => {
    test('CHECK IF RATING IS FOUND', async () => {
        const movieId = 2
        const result = await loadMovieRatings(movieId);
       expect(result.length).toBeGreaterThan(0);
       console.log(result);
    } )
} )

describe('IMDB?', () => {
    test('IF TEST SUCCEDS THEN RATING IS FROM IMDB', async () => {
        const movieId = 3
        const result = await loadMovieRatings(movieId);
        expect(result.length).toBeGreaterThan(15);
        console.log(result);
    })
})

describe('MOCK RATINGS', () => {
    test('GET RATINGS FROM MOCK', async () => {
        const result = getMovieRatingsMock();
        expect(result.length).toBeGreaterThan(0);
        console.log(result);
    })
})