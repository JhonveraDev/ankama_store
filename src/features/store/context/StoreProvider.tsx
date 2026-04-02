import { storeData } from "../../../shared";
import { StoreContext } from "./StoreContext";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <StoreContext.Provider value={storeData}>
      {children}
    </StoreContext.Provider>
  );
}