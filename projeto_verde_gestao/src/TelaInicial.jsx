import { useState } from "react";
import Form from "./components/Form";

function TelaInicial() {
  const [login, setLogin] = useState(null);

  if (login) {
    return login;
  }
  return (
    <div className="w-screen h-screen bg-amber-200 flex justify-center p-7">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-600 font-bold text-center">
          Projeto Verde Gestão
        </h1>
        <h2 className="text-md text-slate-900 font-formal text-center mb-6">
          Bem-vindo(a)!
        </h2>
        <div className="flex justify-center mb-6">
          <button
            className="bg-green-700 text-slate-100 font-bold px-4 py-2 rounded-lg mr-4 hover:bg-green-700 transition-colors"
            onClick={() => setLogin(<Form />)}
          >
            Login
          </button>
          <button className="bg-green-700 text-slate-100 font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Cadastrar-se
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
