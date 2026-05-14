import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const t = localStorage.getItem("bigban_token");
      const u = localStorage.getItem("bigban_user");
      if (t) setToken(t);
      if (u) setUser(JSON.parse(u));
    } catch (e) {
      setUser(null);
      setToken(null);
    }
  }, []);

  const login = (userObj, tokenStr) => {
    try {
      localStorage.setItem("bigban_token", tokenStr);
      localStorage.setItem("bigban_user", JSON.stringify(userObj));
    } catch (e) {}
    setUser(userObj);
    setToken(tokenStr);
    window.dispatchEvent(new Event("storage"));
  };

  const logout = () => {
    try {
      localStorage.removeItem("bigban_token");
      localStorage.removeItem("bigban_user");
    } catch (e) {}
    setUser(null);
    setToken(null);
    window.dispatchEvent(new Event("storage"));
  };

  const fetchWithAuth = async (url, opts = {}) => {
    const headers = opts.headers ? { ...opts.headers } : {};
    if (token) headers["Authorization"] = "Bearer " + token;
    return fetch(url, { ...opts, headers });
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, fetchWithAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
