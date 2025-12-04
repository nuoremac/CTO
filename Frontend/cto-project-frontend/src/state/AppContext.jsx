import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const [selectedMovement, setSelectedMovement] = useState(null);

  return (
    <AppContext.Provider
      value={{ userProfile, setUserProfile, selectedMovement, setSelectedMovement }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
