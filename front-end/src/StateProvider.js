import React, { createContext, useContext, useReducer } from 'react';

// Prepare the date layer
export const StateContext = createContext();

// Wrap the app and provide the data layer
export const StateProvider = ({ initialState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// Pull data from the data layer
export const useStateValue = () => useContext(StateContext);
