import { NavLink } from "react-router-dom";

// Ícone de exemplo, podemos usar a biblioteca react-icons aqui
const LogoIcon = () => (
  <svg className="h-8 w-8 text-emerald-600" /* ... */ >
    {/* Path do logo */}
  </svg>
);

function Sidebar() {
  const navLinkClasses = ({ isActive }) =>
    `flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
      isActive
        ? "bg-emerald-200 text-emerald-900"
        : "text-gray-600 hover:bg-emerald-100"
    }`;

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b">
        <img src="\public\uem-modelo-02.png" alt="Logo Verde Gestão" className="h-10 w-auto" />
        <div className="flex items-center gap-2">
            <LogoIcon />
            <span className="font-bold text-xl text-emerald-900">Verde Gestão</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/home" className={navLinkClasses}>Início</NavLink>
        <NavLink to="/solicitar" className={navLinkClasses}>Solicitar</NavLink>
        <NavLink to="/minhas-solicitacoes" className={navLinkClasses}>Minhas solicitações</NavLink>
        <NavLink to="/configuracoes" className={navLinkClasses}>Configurações</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;