import React, { createContext, useState } from "react";
import type { User } from "../Mocks/data/Usuarios";

interface AppContextParams {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const AppContext = createContext({} as AppContextParams);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AppContext.Provider value={{ user, setUser }} >
      {children}
    </AppContext.Provider>
  )
} 