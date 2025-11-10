/* eslint-disable no-unused-vars */
import { createContext, useState, useContext} from "react";
// import {apiLogin} from "../services/apiLogin"; // Futura chamada de API

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // No futuro, podemos buscar o usuário de um cookie ou localStorage
  const [user, setUser] = useState(null);

  const login = async (user, password) => {
    // --- LÓGICA DE API AQUI ---
    // const response = await apiLogin(user, password);
    // if (response.success) {
    //   setUser(response.user);
    // } else {
    //   throw new Error(response.message);
    // }

    // Por enquanto, vamos simular um login de sucesso
    console.log("Simulando login para:", user);
    setUser({ name: "Usuário Teste", user: user });
  };

  const logout = () => {
    setUser(null);
    // Limpar localStorage/cookies aqui
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};