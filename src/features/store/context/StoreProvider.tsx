import { useParams } from "react-router-dom";
import { storeData } from "../../../shared";
import { StoreContext } from "./StoreContext";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { game } = useParams();
  const data = storeData.find(s => s.basePath === (game ?? "dofus")) ?? storeData[0];

  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  );
}