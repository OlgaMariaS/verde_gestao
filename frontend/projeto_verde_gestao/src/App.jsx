import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";

import Form from "./pages/Login/Form";
import TelaInicial from "./pages/Home/TelaInicial";
import HomeLayout from "./components/layout/HomeLayout";
import PaginaSolicitar from "./pages/Solicitacoes/PaginaSolicitar";

// Componente para proteger rotas
function ProtectedRoute() {
  const { user } = useAuth();
  if (!user) {
    // Se não estiver logado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }
  // Se estiver logado, renderiza o layout principal
  return <HomeLayout />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/home" replace /> : <Form />}
        />
        <Route element={<ProtectedRoute />}>
          {/* Rotas dentro do layout principal */}
          <Route path="/home" element={<TelaInicial />} />
          {/* Adicione outras rotas aqui */}
          <Route path="/solicitar" element={<PaginaSolicitar />} />
          {/* <Route path="/minhas-solicitacoes" element={<PaginaMinhasSolicitacoes />} /> */}
        </Route>
        {/* Rota padrão */}
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;