import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "components/Header";
import DeputiesIndex from "pages/Deputies/Index";
import DeputiesShow from "pages/Deputies/Show";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { darkTheme, lightTheme } from "styles/theme";

const queryClient = new QueryClient();

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Header setDark={setDark} />
        <Routes>
          <Route path="/deputados" element={<DeputiesIndex />} />
          <Route path="/deputados/:id" element={<DeputiesShow />} />
          <Route path="/*" element={<Navigate to="/deputados" />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
