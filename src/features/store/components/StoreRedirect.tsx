import { Navigate, useParams } from "react-router-dom";
import { storeData } from "../../../shared";

export const StoreRedirect = () => {
  const { game } = useParams();

  const store = storeData.find(s => s.basePath === game);

  if (!store) return <Navigate to="/404" replace />;

  const firstCategory = store.categories[0];

  return (
    <Navigate
      to={`/store/${store.basePath}/${firstCategory.path}`}
      replace
    />
  );
};