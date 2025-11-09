import { useState } from "react";
import Form from "./components/Form";

function TelaInicial() {
  const [login, setLogin] = useState(null); // Ainda estou estudando a lógica

  if (login) {
    return login;
  }

  return login || <Form setLogin={setLogin} />;

  // A lógica acima é para quando o login for implementado
  // if (login) {
  //   return <Dashboard />;
  // }

  // return <Form setLogin={setLogin} />;
}

export default TelaInicial;
/*
<div className="w-screen h-screen bg-amber-200 flex justify-center p-26">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-600 font-bold text-center">
          Projeto Verde Gestão
        </h1>
        <h2 className="text-md text-slate-900 font-formal text-center mb-6">
          Bem-vindo(a)!
        </h2>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value="Login"
            disabled
            class="invalid:border- invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ..."
            />
        </div>
      </div>
    </div>
    */
