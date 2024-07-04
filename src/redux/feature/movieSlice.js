const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieList: [],
    movie: {},
  },
  resucers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { getMovies, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
