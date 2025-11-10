import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // Usando o contexto de autenticação

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      // o redirecionamento após o login bem-sucedido pode ser tratado no App.jsx ou aqui
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      // Exibir mensagem de erro para o usuário
    }
  };


  return (
    // Vídeo de referência para o design do formulário: https://youtu.be/dD0s0s3QNjE?si=V1kJt5uYnJJebJ4p é bem básico, mas ajuda a entender o que pode ser feito
    <div className="w-screen min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="relative w-[560px]">
        //As divs abaixo são para criar o efeito de camadas atrás do formulário
        <div
          aria-hidden="true"
          className="absolute -inset-1 transform -rotate-3 rounded-lg bg-amber-200/80 shadow-[0_20px_30px_rgba(120,63,15,0.12)] translate-y-4"
        />
        <div
          aria-hidden="true"
          className="absolute -inset-2 transform rotate-2 rounded-lg bg-emerald-100/80 shadow-[0_30px_40px_rgba(16,185,129,0.06)] translate-y-2"
        />
        <div className="relative bg-white/70 backdrop-blur-md rounded-lg shadow-2xl p-10 ring-1 ring-amber-100">
          <div className="text-center mb-6">
            <img
              alt="Logo Verde Canção"
              // A logo da UEM só está de exemplo
              src="https://cpr.uem.br/images/logotipos/42/1391/_thumb1/uem-modelo-01.png"
              className="mx-auto h-10 w-auto mb-4"
            />
            <h1 className="text-4xl text-emerald-900 font-bold leading-tight">
              Projeto Verde Gestão
            </h1>
            <h2 className="text-md text-amber-800 font-formal mt-2">
              Bem-vindo(a)!
            </h2>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-emerald-900"
              >
                Login
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-emerald-900 placeholder:text-amber-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-emerald-900"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-amber-800 hover:text-amber-700"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-emerald-900 placeholder:text-amber-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-amber-700/95 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 shadow-md"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-emerald-900">
            Ainda não possui login?{" "}
            <a
              href="#"
              className="font-semibold text-amber-800 hover:text-amber-700"
            >
              Entre em contato com a administração
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
