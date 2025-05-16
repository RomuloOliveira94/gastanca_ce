import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DeputiesIndex from "pages/Deputies/Index";
import DeputiesShow from "pages/Deputies/Show";
import { Navigate, Route, Routes } from "react-router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/deputies" element={<DeputiesIndex />} />
        <Route path="/deputies/:id" element={<DeputiesShow />} />
        <Route path="/" element={<Navigate to="/deputies" />} />
      </Routes>
    </QueryClientProvider>
  );
}
