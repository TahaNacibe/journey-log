import { Routes, Route } from "react-router-dom";
import MainPage from "./app/page";
import PageNotFound from "./404";
import { useAppTheme } from "./hooks/useAppTheme";
import { useEffect } from "react";
import FinancesPage from "./app/finances/page";

function App() {
  // ============== LOAD THEME =================
  const { readTheme } = useAppTheme();
  useEffect(() => {
    readTheme();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/finances" element={<FinancesPage />} />

      {/* =========== STATIC PAGES ============== */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
