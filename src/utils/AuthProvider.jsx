import { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/auth-service";
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authGuard = async () => {
    try {
      const result = await AuthService.authGuard()
      console.log("result.data", result.data)
      setIsAuthenticated(result.data)
      setLoading(false)
    } catch (err) {
      setIsAuthenticated(false)
      setLoading(false)
    }
  }
  useEffect(() => {
    authGuard()
  }, [])
  return <>{
    !loading && <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  }
  </>

};
export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("context", context)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};