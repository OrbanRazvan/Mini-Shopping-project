import React, { createContext, useContext, useReducer } from 'react';

export const ShoppingContext = createContext();

export const Provider = ({ initialShopping, reducer, children }) => (
  <ShoppingContext.Provider value={useReducer(reducer, initialShopping)}>
    {children}
  </ShoppingContext.Provider>
);


export const useShoppingContext = () => useContext(ShoppingContext);