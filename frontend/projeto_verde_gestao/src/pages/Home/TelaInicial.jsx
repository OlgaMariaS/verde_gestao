import { useState } from "react";
import Form from "../Login/Form";

function TelaInicial() {
  const [login, setLogin] = useState(null);

  if (login) return login;
  return <Form setLogin={setLogin} />;


}

export default TelaInicial;
