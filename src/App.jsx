import { Routes, Route } from "react-router-dom";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderForm />} />
    </Routes>
  );
}export default App;