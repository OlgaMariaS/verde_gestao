import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PainelAvisos from "./PainelAvisos";

function HomeLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            <Outlet />
          </main>
          <PainelAvisos />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;