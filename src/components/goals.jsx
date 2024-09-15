import React from 'react';

const goals = [
  { id: 1000, goal: "Incrementar ventas globales en un 20%", target: 100000, progress: 25000, compliance: 25 },
  { id: 1001, goal: "Mejorar duración de batería en un 15%", target: 300, progress: 150, compliance: 50 },
  { id: 1002, goal: "Ampliar compatibilidad con dispositivos de otras marcas", target: 10, progress: 9, compliance: 90 },
  { id: 1003, goal: "Reducir costos de producción en un 10%", target: 500000, progress: 500000, compliance: 100 },
];

const getStatus = (compliance) => {
  if (compliance <= 35) return { status: "Crítico", color: "text-red-500 bg-red-100" };
  if (compliance <= 75) return { status: "Aceptable", color: "text-orange-500 bg-orange-100" };
  return { status: "Exitoso", color: "text-green-500 bg-green-100" };
};

const StrategicGoals = () => {
  return (
    <section className="p-6 overflow-x-auto">
      <h1 id="goals" className="text-2xl font-bold mb-4">3. Objetivos Estratégicos</h1>
      <table className="min-w-full border-collapse border border-gray-400 bg-white shadow-md">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="border p-3 text-left">Código</th>
            <th className="border p-3 text-left">Objetivo</th>
            <th className="border p-3 text-left">Meta</th>
            <th className="border p-3 text-left">Avance</th>
            <th className="border p-3 text-left">Cumplimiento</th>
            <th className="border p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal, index) => {
            const { status, color } = getStatus(goal.compliance);
            const rowBg = index % 2 === 0 ? "bg-gray-100" : "bg-white"; // Alternar colores de fondo
            return (
              <tr key={goal.id} className={rowBg}>
                <td className="border p-3">{goal.id}</td>
                <td className="border p-3">{goal.goal}</td>
                <td className="border p-3">{goal.target}</td>
                <td className="border p-3">{goal.progress}</td>
                <td className="border p-3">{goal.compliance}%</td>
                <td className={`border p-3 font-semibold ${color} rounded`}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default StrategicGoals;
