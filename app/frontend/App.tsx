import DeputiesIndex from "pages/Deputies/Index";
import DeputiesShow from "pages/Deputies/Show";
import { Navigate, Route, Routes } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/deputies" element={<DeputiesIndex />} />
      <Route path="/deputies/:id" element={<DeputiesShow />} />
      <Route path="/" element={<Navigate to="/deputies" />} />
    </Routes>
  );
}
