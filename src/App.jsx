import { Routes, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/order" element={<OrderForm />} />
      <Route path="/success" element={<SuccessPage/>} />
    </Routes>
  );
}export default App;