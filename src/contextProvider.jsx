 
//   import React, { useState, createContext, useContext } from "react";

// const colorContext = createContext();

// export const useColor = () => {
//   return useContext(colorContext);
// };

// export const ThemProvider = ({ children }) => {
//   const [color, setColor] = useState('light');

//   const colorToggler = () => {
//     setColor(prev => (prev === 'light' ? 'black' : 'light'));
//   };

//   return (
//     <colorContext.Provider value={{ color, colorToggler }}>
//       {children}
//     </colorContext.Provider>
//   );
// };