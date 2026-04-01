import { useContext } from "react";
import type { Store } from "../../../shared";
import { StoreContext } from "./StoreContext";

export function useStore(): Store {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}