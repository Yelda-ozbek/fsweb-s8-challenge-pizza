import { Routes, Route, useNavigate } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const navigate = useNavigate(); 
  const navigateToOrder = () => {
    navigate("/order");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage navigateToOrder={navigateToOrder} />} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
