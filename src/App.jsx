import React, { useState } from "react";
import AppRoutes from "./components/routes/AppRoutes";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AdminThemeProvider>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <AppRoutes />
    </AdminThemeProvider>
  );
};

export default App;
