import { useContext } from "react";
import type { StoreData } from "../../../shared";
import { StoreContext } from "..";

export function useStore(): StoreData {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}