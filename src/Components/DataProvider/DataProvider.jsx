
import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../../Utility/Reducer"; 

export const DataContext = createContext();


export const DataProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};















