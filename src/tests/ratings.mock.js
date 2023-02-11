
export function getMovieRatingsMock() {
    function getRandomNumber(max) {
        return Math.floor(Math.random())
    }
    getRandomNumber(5)

    return "Rating: " + getRandomNumber;
}

