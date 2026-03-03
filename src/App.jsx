import React from "react";
import AppRoutes from "./components/routes/AppRoutes";
import { AdminThemeProvider } from "./contexts/AdminThemeContext";

const App = () => {
  return (
    <AdminThemeProvider>
      <AppRoutes />
    </AdminThemeProvider>
  );
};

export default App;
