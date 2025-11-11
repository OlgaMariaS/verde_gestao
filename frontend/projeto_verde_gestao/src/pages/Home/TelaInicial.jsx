import { FiFileText, FiPlusCircle, FiCheckSquare } from "react-icons/fi";

// Componente de Card reutilizável para estatísticas
// Esses cards estão na grid da tela inicial (minhas solucitações, aprovadas, nova solicitação)
const StatCard = ({ icon, title, value, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-start gap-4">
    <div className="bg-emerald-100 text-emerald-700 p-3 rounded-lg">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </div>
  </div>
);

function TelaInicial() {
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-3xl font-bold text-emerald-900">
          Aqui podemos pensar em uma mensagem de boas-vindas personalizada
        </h1>
        <p className="mt-2 text-gray-600 mb-8">
          Bem-vindo ao painel principal. Aqui estão alguns atalhos e
          estatísticas.
        </p>

        {/* Grid de Cards de Estatísticas */}
        {/* implementei esses cards apenas como testes, pois, tinhamos comentado de ter tipo um kanbam. Implementaremos ele aqui} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            icon={<FiFileText size={24} />}
            title="Minhas Solicitações"
            value="12"
            description="Total de solicitações enviadas"
          />
          <StatCard
            icon={<FiCheckSquare size={24} />}
            title="Aprovadas"
            value="8"
            description="Solicitações com status aprovado"
          />
          <StatCard
            icon={<FiPlusCircle size={24} />}
            title="Nova Solicitação"
            value="Atalho"
            description="Clique para iniciar um novo pedido"
          />
        </div>
      </div>

      {/* Futuros Gráficos e Tabelas */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800">
          Atividade Recente
        </h2>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">
            Gráficos e outras visualizações de dados poderão aparecer aqui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
