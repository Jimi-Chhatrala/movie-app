import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useStyles from "../styles";
import { getMovie } from "../redux/feature/movieSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);

  return (
    <div>
      <section className={classes.section}>
        <img src={movie.Poster} alt={movie.Title} />
        <div>
          <Typography align="left" variant="h3" gutterBottom component={"h2"}>
            {movie.Title}
          </Typography>
          <Typography align="left" variant="h5" gutterBottom component={"h5"}>
            Year: {movie.Year}
          </Typography>
          <Typography align="left" variant="body1" gutterBottom component={"p"}>
            {movie.Plot}
          </Typography>
          <Typography align="left" variant="h6" gutterBottom component={"h6"}>
            Director: {movie.Director}
          </Typography>
          <Button variant="contained" onClick={() => navigate("/movie-app/")}>
            Go Back
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Movie;
