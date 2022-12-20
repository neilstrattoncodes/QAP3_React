import { useEffect } from "react";
import { useVideogamesContext } from "../hooks/useVideogamesContext";

// components
import VideogameDetails from "../components/VideogameDetails";
import VideogameForm from "../components/VideogameForm";

const Home = () => {
  const { videogames, dispatch } = useVideogamesContext();

  useEffect(() => {
    const fetchVideogames = async () => {
      const response = await fetch("http://localhost:4000/api/videogames");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_VIDEOGAMES", payload: json });
      }
    };

    fetchVideogames();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="videogames">
        {videogames &&
          videogames.map((videogame) => (
            <VideogameDetails key={videogame._id} videogame={videogame} />
          ))}
      </div>
      <VideogameForm />
    </div>
  );
};

export default Home;
