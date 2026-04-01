import { useContext } from "react";
import type { Store } from "../../../shared";
import { StoreContext } from "./StoreContext";

export function useStore(): Store {
  return useContext(StoreContext);
}