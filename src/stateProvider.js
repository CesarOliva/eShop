import React, {createContext, useContext, useReducer} from "react";

//Creates an empty context that will fill with the  useReducer value
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Access the context from every component
export const useStateValue = () => useContext(StateContext);    