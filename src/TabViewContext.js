import React from 'react';

export const TabContext = React.createContext();

export function useTabContext() {
  return React.useContext(TabContext);
}
