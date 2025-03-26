import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  const login = (userToken) => {
    console.log("Login called, setting token:", userToken);
    setToken(userToken);
    localStorage.setItem("token", userToken);
  };

  const logout = async () => {
    try {
      await fetch("https://backend-onef.onrender.com/api/logout", {
        method: "POST",
        credentials: "include",
      });
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Fetch user data when token is set
  useEffect(() => {
    console.log("AuthContext useEffect triggered, Token:", token);

    const fetchUser = async () => {
      if (!token) {
        console.warn("No token found, skipping fetchUser");
        return;
      }

      try {
        console.log("Fetching user data with token:", token);
        const response = await fetch("https://backend-onef.onrender.com/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure the token is sent
          },
          credentials: "include", // Important if using HTTP-only cookies
        });

        const data = await response.json();
        console.log("Fetched user data:", data);

        if (response.ok && data.success && data.user) {
          setUser(data.user);
        } else {
          console.error("Failed to fetch user data:", data.message);
          setUser(null);
        }
        // conosole test case
        if (response.ok && data.success && data.user) {
          setUser(data.user);
          console.log("User state updated:", data.user); // ✅ Add this
        }
        
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    };

    fetchUser();
    
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
