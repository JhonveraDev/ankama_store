import { createContext } from "react";
import type { Store } from "../../../shared";
import { storeData } from "../../../shared";

export const StoreContext = createContext<Store>(storeData[0]);