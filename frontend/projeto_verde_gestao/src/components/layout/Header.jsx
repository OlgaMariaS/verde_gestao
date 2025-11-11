import { useAuth } from "../../context/AuthContext";
import { FiMenu, FiSearch, FiBell, FiUser, FiLogOut } from 'react-icons/fi';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-4">
        <button className="text-emerald-300 lg:hidden">
          <FiMenu size={24} />
        </button>
        <div className="relative hidden md:block">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="bg-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-emerald-600 transition w-64"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-emerald-600" title="Notificações">
          <FiBell size={22} />
        </button>
        <div className="flex items-center gap-2">
            <FiUser className="text-gray-600" size={24} />
            <span className="text-sm font-medium text-gray-700 hidden sm:block">{user?.name || 'Usuário'}</span>
        </div>
        <button onClick={logout} className="text-gray-600 hover:text-red-600" title="Sair">
            <FiLogOut size={22} />
        </button>
      </div>
    </header>
  );
}

export default Header;