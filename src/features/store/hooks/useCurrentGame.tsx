import { useParams } from "react-router-dom";
import { useStore } from "../";

export function useCurrentGame() {
  const { game } = useParams();
  const store = useStore();
  return store.find(g => g.basePath === game);
}