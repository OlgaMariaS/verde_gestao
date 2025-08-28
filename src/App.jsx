import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

/*
function FuncaoTeste() {
  // State (Estado): É uma variável, assim como a variável mensagem, e o que acontece, quando alteramos o state, alteramos a tela da nossa página.
  // let mensagem = 'Olá mundo! Boa testar um botão de redirecionamento' Exemplo
  const [mensagem, setMessage] = useState("Olá mundo..! Valor inicial") // Aqui a função setMessage irá alterar o valor do state, que é a variável "mensagem"
  // O State faz com que o return seja carregada novamente, ou seja, quando você muda o State da variável, a sua interface é atualizada. 
  
  // Então o State vai ser muito útil quando quisermos alterar algo com que o usuário vá ou esteja interagindo 
  // Aliás, o conceito de State é um dos fundamentais no react, pois bem, React, vem de Reagir, certo? É isso...
  // Intergindo com ações do usuário.

  return (
    // Neste "return só podemos retornar um único elemento, ou seja, para cada return iremos contruir um elemento e tratá-los com o jsx". Tendeu?
    <div>
      <h1>
        <h1>{mensagem}</h1>
      </h1>
      <button onClick={() => {
          setMessage("Olá, tu clicou no botão mesmo");
      }}
    
        >Mudar de Tela</button>
    </div>
  )
}

*/

function TelaInicial() {
  return (
    <div>
      <h1> Sistema Verde Gestão </h1>
      <Form />
    </div>
  );

}
// Próxima parte: Estilização utilizando o tailwind CSS :) -> basta seguir as orientações de configuração no site deles.
export default TelaInicial