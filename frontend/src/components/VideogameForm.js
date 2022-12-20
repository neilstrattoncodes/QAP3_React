import { useState } from "react";
import { useVideogamesContext } from "../hooks/useVideogamesContext";

const VideogameForm = () => {
  const { dispatch } = useVideogamesContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [platform, setPlatform] = useState("");
  const [sku, setSku] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videogame = { title, desc, type, price, platform, sku };

    const response = await fetch("http://localhost:4000/api/videogames", {
      method: "POST",
      body: JSON.stringify(videogame),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDesc("");
      setType("");
      setPrice("");
      setPlatform("");
      setSku("");
      console.log("new videogame added:", json);
      dispatch({ type: "CREATE_VIDEOGAME", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Videogame</h3>

      <label>Game Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />

      <label>Game type:</label>
      <input
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
      />

      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />

      <label>Platform:</label>
      <input
        type="text"
        onChange={(e) => setPlatform(e.target.value)}
        value={platform}
      />

      <label>Sku:</label>
      <input
        type="number"
        onChange={(e) => setSku(e.target.value)}
        value={sku}
      />

      <button>Add Game</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default VideogameForm;
