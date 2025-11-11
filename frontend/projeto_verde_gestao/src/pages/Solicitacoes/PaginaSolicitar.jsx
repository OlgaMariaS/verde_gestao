import React, { useState, useRef } from "react";
import { FiPaperclip, FiX } from "react-icons/fi";

function PaginaSolicitar() {
  const [dadosSolicitacao, setDadosSolicitacao] = useState({
    nome: "",
    celular: "",
    categoria: "",
    responsavel: "",
    detalhamento: "",
    anexos: [],
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosSolicitacao((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (!e?.target?.files) return;
    setDadosSolicitacao((prevState) => ({
      ...prevState,
      anexos: [...prevState.anexos, ...Array.from(e.target.files)],
    }));
    // opcional: resetar valor para permitir re-selecionar o mesmo arquivo depois
    e.target.value = "";
  };

  const handleRemoveFile = (fileIndex) => {
    setDadosSolicitacao((prevState) => ({
      ...prevState,
      anexos: prevState.anexos.filter((_, index) => index !== fileIndex),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui devemos adicionar a lógica para enviar os dados da solicitação para o backend
    console.log("Dados da solicitação:", dadosSolicitacao);
    // Talvez, deveremos resetar o formulário após o envio, só setar os dados para estado inicial como lá no primeiro const de useState
    alert("Solicitação enviada com sucesso!");
  };

  return (
    // Container simplificado. O layout pai (HomeLayout) agora controla o preenchimento e a rolagem.
    // Este componente agora retorna apenas o painel do formulário.
    <div className="size-lvw mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Nova Solicitação
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Campo Nome */}
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={dadosSolicitacao.nome}
              onChange={handleChange}
              placeholder="Digite seu nome aqui"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder:text-gray-400"
              required
            />
          </div>

          {/* Campo Categoria de Documento */}
          <div>
            <label
              htmlFor="categoria"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Categoria de documento
            </label>
            <select
              name="categoria"
              id="categoria"
              value={dadosSolicitacao.categoria}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            >
              <option value="">Selecione</option>
              {/* As opções serão preenchidas dinamicamente no futuro */}
              <option
                value="contrato"
                className="text-gray-900 hover:bg-emerald-100"
              >
                Contrato
              </option>
              <option
                value="relatorio"
                className="text-gray-900 hover:bg-emerald-100"
              >
                Relatório
              </option>
              <option
                value="proposta"
                className="text-gray-900 hover:bg-emerald-100"
              >
                Proposta
              </option>
            </select>
          </div>

          {/* Campo Celular */}
          <div>
            <label
              htmlFor="celular"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Celular
            </label>
            <input
              type="tel"
              name="celular"
              id="celular"
              value={dadosSolicitacao.celular}
              onChange={handleChange}
              placeholder="Digite seu número"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Campo Responsável */}
          <div>
            <label
              htmlFor="responsavel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Responsável
            </label>
            <select
              name="responsavel"
              id="responsavel"
              value={dadosSolicitacao.responsavel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
              required
            >
              <option value="">Selecione</option>
              {/* As opções serão preenchidas dinamicamente no futuro */}
              <option
                value="financeiro"
                className="text-gray-900 hover:bg-emerald-100"
              >
                Financeiro
              </option>
              <option value="rh" className="text-gray-900 hover:bg-emerald-100">
                Recursos Humanos
              </option>
              <option
                value="juridico"
                className="text-gray-900 hover:bg-emerald-100"
              >
                Jurídico
              </option>
            </select>
          </div>
        </div>

        {/* Campo Detalhamento */}
        <div>
          <label
            htmlFor="detalhamento"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Detalhamento
          </label>
          <textarea
            name="detalhamento"
            id="detalhamento"
            rows="6"
            value={dadosSolicitacao.detalhamento}
            onChange={handleChange}
            placeholder="Detalhe sua solicitação aqui..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder:text-gray-400"
          ></textarea>
        </div>

        {/* Campo Anexar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Anexos
          </label>
          <div className="flex items-start gap-4">
            {/* botão que dispara o input via ref para evitar comportamentos inesperados */}
            <button
              type="button"
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              aria-label="Adicionar anexos"
            >
              <FiPaperclip />
              <span>Anexar</span>
            </button>

            {/* input escondido acessível */}
            <input
              ref={fileInputRef}
              type="file"
              name="anexos"
              id="anexos"
              onChange={handleFileChange}
              className="sr-only"
              multiple
              aria-hidden="true"
            />

            {/* Lista de arquivos selecionados */}
            {dadosSolicitacao.anexos.length > 0 && (
              <div className="w-full mt-2 space-y-2">
                <h4 className="text-sm font-medium text-gray-600">
                  Arquivos selecionados:
                </h4>
                {dadosSolicitacao.anexos.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`} // Chave mais específica para evitar problemas de renderização
                    className="flex items-center justify-between bg-gray-100 p-2 rounded-md text-sm"
                  >
                    <span className="text-gray-800 truncate" title={file.name}>
                      {file.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-600 hover:text-red-800 ml-4 flex-shrink-0"
                      title="Remover arquivo"
                      aria-label={`Remover ${file.name}`}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botão Solicitar */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-8 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75"
          >
            Solicitar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaginaSolicitar;
