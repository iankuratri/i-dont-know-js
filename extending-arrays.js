class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }

  add(movie) {
    this.push(movie);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

const movies = new MovieCollection(
  "My fav movies",
  {
    name: "Bee Movie",
    stars: 1,
  },
  {
    name: "Start Wars Trek",
    stars: 5,
  },
  {
    name: "Suicide Squad",
    stars: 7,
  },
  {
    name: "King Kong",
    stars: 8,
  }
);

console.log("MovieCollection: ", movies);

movies.add({ name: "Avengers", stars: 10 });

console.log("MovieCollection after adding a new movie: ", movies);

// Top 3 movies
console.table(movies.topRated(3));
