import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { storeData, type Store } from "../../../shared";

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { game } = useParams();
  
  const data = storeData.find(s => s.basePath === (game ?? "dofus")) ?? storeData[0];

  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore debe usarse dentro de StoreProvider");
  return context;
}