function PainelAvisos() {
  // Dados de exemplo para os avisos
  const notices = [
    { id: 1, title: "Manutenção Programada", content: "O sistema ficará indisponível no dia 15/11." },
    { id: 2, title: "Atualização de Política", content: "Nossas políticas de uso foram atualizadas." },
    { id: 3, title: "Novo Recurso", content: "A funcionalidade de exportar relatórios já está disponível." },
  ];

  return (
    <aside className="w-72 flex-shrink-0 bg-white border-l border-gray-200 p-6 hidden lg:block">
      <h2 className="text-sm font-semibold text-gray-500 bg-gray-100 rounded-full px-4 py-1 text-center">
        Avisos
      </h2>
      <div className="mt-6 space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">{notice.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{notice.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default PainelAvisos;