const swotData = [
  {
    type: "Debilidades",
    items: [
      {
        title: "Precio elevado",
        description:
          "Los Galaxy Buds3 Pro son significativamente más costosos que muchos competidores de gama media, lo que los hace menos accesibles para el público en general.",
      },
      {
        title: "Duración de batería en modo ANC",
        description:
          "Aunque la duración de la batería es decente, disminuye considerablemente al activar la cancelación de ruido activa (ANC), lo que puede afectar la experiencia del usuario durante largos periodos de uso.",
      },
      {
        title: "Dependencia del ecosistema Samsung",
        description:
          "Muchas de las funcionalidades avanzadas están restringidas a dispositivos del ecosistema Samsung, lo que limita su atractivo para usuarios de otras marcas.",
      },
    ],
  },
  {
    type: "Oportunidades",
    items: [
      {
        title: "Demanda creciente de audífonos con ANC",
        description:
          "La demanda de audífonos inalámbricos con cancelación de ruido activa está en auge, especialmente entre los profesionales que trabajan en entornos ruidosos o viajan con frecuencia.",
      },
      {
        title: "Expansión de la tecnología 5G",
        description:
          "Con la expansión de la red 5G, se espera un crecimiento en el consumo de contenido multimedia en alta calidad, lo que impulsa la necesidad de auriculares premium.",
      },
      {
        title: "Tecnologías de audio basadas en IA",
        description:
          "El uso de inteligencia artificial para mejorar la calidad de sonido y la personalización de la experiencia auditiva es una gran oportunidad para diferenciarse de la competencia.",
      },
    ],
  },
  {
    type: "Fortalezas",
    items: [
      {
        title: "Calidad de sonido superior",
        description:
          "Los Galaxy Buds3 Pro ofrecen una calidad de sonido nítida y equilibrada con graves potentes, lo que los convierte en uno de los mejores auriculares del mercado en cuanto a experiencia auditiva.",
      },
      {
        title: "Integración con ecosistema Samsung",
        description:
          "La integración perfecta con dispositivos Samsung permite características exclusivas como el cambio automático entre dispositivos y funciones de control avanzado a través de la app Galaxy Wearable.",
      },
      {
        title: "Resistencia al agua IPX7",
        description:
          "Con certificación IPX7, los auriculares son altamente resistentes al agua, lo que los hace ideales para usuarios que los usan durante actividades deportivas o bajo la lluvia.",
      },
    ],
  },
  {
    type: "Amenazas",
    items: [
      {
        title: "Alta competencia en audífonos premium",
        description:
          "El mercado de los audífonos premium está altamente competitivo, con marcas como Apple, Sony y Bose ofreciendo productos de alta calidad con características similares o superiores.",
      },
      {
        title: "Cambios en tendencias tecnológicas",
        description:
          "Las tendencias tecnológicas están cambiando rápidamente, y los consumidores podrían migrar hacia nuevas soluciones o tecnologías emergentes, como auriculares con realidad aumentada integrada.",
      },
      {
        title: "Escasez de chips",
        description:
          "La actual crisis mundial de chips puede afectar la capacidad de producción y suministro de dispositivos electrónicos, lo que impacta la disponibilidad y los precios de los Galaxy Buds3 Pro.",
      },
    ],
  },
];

const Diagnostic = () => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1 id="swot" className="text-2xl font-bold mb-4">1. Diagnóstico Actual (DOFA)</h1>.
      {swotData.map((category) => (
        <div key={category.type} className="rounded shadow-md border p-5 bg-white">
          <h3 className="font-bold text-xl mb-3">{category.type}</h3>
          <ul className="space-y-2">
            {category.items.map((item, index) => (
              <li key={index}>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Diagnostic;
