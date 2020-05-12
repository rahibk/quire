import React, { useState, useEffect } from "react";
import Landing from "./Landing";

const AuthGate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
    if (isAuthenticated) {
        return children;
    } else {
        return <Landing/>;
    }
};

export default AuthGate;
