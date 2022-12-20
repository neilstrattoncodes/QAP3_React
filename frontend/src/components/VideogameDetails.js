import { useVideogamesContext } from "../hooks/useVideogamesContext";

const VideogameDetails = ({ videogame }) => {
  const { dispatch } = useVideogamesContext();

  const handleClick1 = async () => {
    const response = await fetch(
      "http://localhost:4000/api/videogames/" + videogame._id,
      {
        method: "PUT",
      }
    );
  };
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/videogames/" + videogame._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_VIDEOGAME", payload: json });
    }
  };
  return (
    <div className="videogame-details">
      <h4>{videogame.title}</h4>
      <p>
        <strong>Description: </strong>
        {videogame.desc}
      </p>
      <p>
        <strong>Type: </strong>
        {videogame.type}
      </p>
      <p>
        <strong>Price: </strong>
        {videogame.price}
      </p>
      <p>
        <strong>Platform: </strong>
        {videogame.platform}
      </p>
      <p>
        <strong>Sku: </strong>
        {videogame.sku}
      </p>
      <p>{videogame.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};
export default VideogameDetails;
