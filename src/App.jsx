// import React from 'react';
// import { useState } from "react";

function App() {
  // Datos para el Diagnóstico Actual (DOFA)
  const swotData = [
    {
      type: "Debilidades",
      items: [
        "Precio elevado",
        "Duración de batería en modo ANC",
        "Dependencia del ecosistema Samsung",
      ],
    },
    {
      type: "Oportunidades",
      items: [
        "Demanda creciente de audífonos con ANC",
        "Expansión de la tecnología 5G",
        "Tecnologías de audio basadas en IA",
      ],
    },
    {
      type: "Fortalezas",
      items: [
        "Calidad de sonido superior",
        "Integración con ecosistema Samsung",
        "Resistencia al agua IPX7",
      ],
    },
    {
      type: "Amenazas",
      items: [
        "Alta competencia en audífonos premium",
        "Cambios en tendencias tecnológicas",
        "Escasez de chips",
      ],
    },
  ];

  // Datos para los Objetivos Estratégicos
  const goals = [
    {
      id: 1000,
      goal: "Incrementar ventas globales en un 20%",
      target: 100000,
      progress: 25000,
      compliance: 25,
    },
    {
      id: 1001,
      goal: "Mejorar duración de batería en un 15%",
      target: 300,
      progress: 150,
      compliance: 50,
    },
    {
      id: 1002,
      goal: "Ampliar compatibilidad con dispositivos de otras marcas",
      target: 10,
      progress: 9,
      compliance: 90,
    },
    {
      id: 1003,
      goal: "Reducir costos de producción en un 10%",
      target: 500000,
      progress: 500000,
      compliance: 100,
    },
  ];

  // Función para obtener el estado de cumplimiento
  const getStatus = (compliance) => {
    if (compliance <= 35) return { status: "Crítico", color: "text-red-500" };
    if (compliance <= 75)
      return { status: "Aceptable", color: "text-orange-500" };
    return { status: "Exitoso", color: "text-green-500" };
  };

  return (
    <div className="bg-gray-300">
      {/* Header */}
      <header className="bg-blue-600 p-6  text-white text-center">
        <h1 className="text-xl font-bold">Planeación Estratégica</h1>
      </header>

      <div className="container mx-auto p-6">
        {/* Introducción */}
        <section className="p-6">
          <h1 className="text-xl font-bold text-center m-4">Introducción</h1>
          <p className="text-center">
            Los Galaxy Buds3 Pro ofrecen una experiencia de audio premium con
            cancelación de ruido adaptativa, un diseño ergonómico y una calidad
            de sonido envolvente. Equipados con la última tecnología de Samsung,
            estos audífonos inalámbricos son ideales para aquellos que buscan lo
            último en comodidad y rendimiento.
          </p>
        </section>

        <h1 className="p-6 text-xl font-bold">1. Diagnóstico Actual</h1>
        {/* Diagnóstico Actual (DOFA) */}
        <section className="p-6 grid grid-cols-2 gap-4">
          {swotData.map((category) => (
            <div key={category.type} className="rounded shadow-md border p-5">
              <h3 className="font-bold">{category.type}</h3>
              <ul>
                {category.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Identidad Organizacional */}
        <section className="p-6">
          <h1 className="text-xl font-bold">2. Identidad Organizacional</h1>
          <p>
            <strong>Misión:</strong> Crear experiencias innovadoras de audio que
            conecten a las personas de manera significativa y mejoren su calidad
            de vida.
          </p>
          <p>
            <strong>Visión:</strong> Convertirnos en líderes mundiales en
            soluciones de audio premium, impulsando el futuro de la conectividad
            inalámbrica.
          </p>
          <p>
            <strong>Políticas:</strong> Samsung se compromete a la
            sostenibilidad, la calidad y la innovación constante para
            proporcionar productos de alta tecnología que respeten el medio
            ambiente.
          </p>
        </section>

        {/* Objetivos Estratégicos */}
        <section className="p-6">
          <h1 className="text-xl font-bold">3. Objetivos Estratégicos</h1>
          <table className="min-w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border p-2">Código</th>
                <th className="border p-2">Objetivo</th>
                <th className="border p-2">Meta</th>
                <th className="border p-2">Avance</th>
                <th className="border p-2">Cumplimiento</th>
                <th className="border p-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((goal) => {
                const { status, color } = getStatus(goal.compliance);
                return (
                  <tr key={goal.id}>
                    <td className="border p-2">{goal.id}</td>
                    <td className="border p-2">{goal.goal}</td>
                    <td className="border p-2">{goal.target}</td>
                    <td className="border p-2">{goal.progress}</td>
                    <td className="border p-2">{goal.compliance}%</td>
                    <td className={`border p-2 ${color}`}>{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p>&copy; 2024 By Cristian Chavez Sarmiento. All rights reserved.</p>
        <p>
          Galaxy Buds3 Pro is a registered trademark of Samsung Electronics Co.,
          Ltd.
        </p>
      </footer>
    </div>
  );
}

export default App;
