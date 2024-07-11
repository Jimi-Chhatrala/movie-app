import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movie-app/" element={<Home />} />
          <Route path="/movie-app/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
