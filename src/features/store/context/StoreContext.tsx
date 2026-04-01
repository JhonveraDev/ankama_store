import { createContext } from "react";
import type { Store } from "../../../shared";

export const StoreContext = createContext<Store | null>(null);