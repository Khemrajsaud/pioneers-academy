import React, { useState, useEffect } from "react";
import AppRoutes from "./components/routes/AppRoutes";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Clear admission popup flag on page refresh/initial load only
  useEffect(() => {
    window.sessionStorage.removeItem("admissionPopupDismissed");
  }, []);

  return (
    <AdminThemeProvider>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <AppRoutes />
    </AdminThemeProvider>
  );
};

export default App;
