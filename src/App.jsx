import { Routes, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/order" element={<OrderForm />} />
    </Routes>
  );
}export default App;