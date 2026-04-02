import { createContext } from "react";
import type { StoreData } from "../../../shared";

export const StoreContext = createContext<StoreData | null>(null);