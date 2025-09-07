import React, { createContext, useContext } from 'react';

interface Settings3DContextType {
  enable3D: boolean;
}

const Settings3DContext = createContext<Settings3DContextType>({ enable3D: false });

export const useSettings3D = () => useContext(Settings3DContext);

interface Settings3DProviderProps {
  children: React.ReactNode;
  enable3D: boolean;
}

export const Settings3DProvider: React.FC<Settings3DProviderProps> = ({ children, enable3D }) => {
  return (
    <Settings3DContext.Provider value={{ enable3D }}>
      {children}
    </Settings3DContext.Provider>
  );
};
