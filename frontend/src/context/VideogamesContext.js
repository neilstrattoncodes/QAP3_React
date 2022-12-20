import { createContext, useReducer } from "react";

export const VideogamesContext = createContext();

export const videogamesReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOGAMES":
      return {
        videogames: action.payload,
      };
    case "CREATE_VIDEOGAMES":
      return {
        videogames: [action.payload, ...state.videogames],
      };

    case "DELETE_VIDEOGAMES":
      return {
        videogames: state.videogames.filter(
          (w) => w._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const VideogamesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videogamesReducer, {
    videogames: null,
  });

  return (
    <VideogamesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VideogamesContext.Provider>
  );
};
