import Orders from "./pages/Orders";
import { Route, Routes } from "react-router-dom";
import DetailedOrder from "./pages/DetailedOrder";

function App() {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
    </Routes>
  );
}

export default App;
