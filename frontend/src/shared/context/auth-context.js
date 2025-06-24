import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  creator: null,
  token: null,
  login: () => {},
  logout: () => {},
});
