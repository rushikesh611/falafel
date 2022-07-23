import { Routes, Route } from "react-router-dom";
import CreateMenuItem from "../pages/CreateMenuItem";
import DetailedOrder from "../pages/DetailedOrder";
import OrderHistory from "../pages/OrderHistory";
import Orders from "../pages/Orders";
import RestaurantMenu from "../pages/RestaurantMenu";
import Settings from "../pages/Settings";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<RestaurantMenu />} />
      <Route path="menu/create" element={<CreateMenuItem />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
