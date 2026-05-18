const ADMIN_AUTH_KEY = "adminAuthenticated";

export const isAdminAuthenticated = () => {
  return window.localStorage.getItem(ADMIN_AUTH_KEY) === "true";
};

export const setAdminAuthenticated = () => {
  window.localStorage.setItem(ADMIN_AUTH_KEY, "true");
};

export const clearAdminAuthenticated = () => {
  window.localStorage.removeItem(ADMIN_AUTH_KEY);
};