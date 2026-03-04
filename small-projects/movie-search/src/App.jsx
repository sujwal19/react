import Header from "./Header";
import "remixicon/fonts/remixicon.css";
import Home from "./Home";
import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      );
      const data = await response.json();
      setMovie(data);
    } catch (err) {
      console.error("Error Fetching movie: ", err);
    }
    fetchMovieData();
    console.log(movie);
  };

  return (
    <div>
      <section className="home bg-gray-900 h-full text-white px-20">
        <Header />
        <Home />
      </section>
    </div>
  );
};

export default App;
