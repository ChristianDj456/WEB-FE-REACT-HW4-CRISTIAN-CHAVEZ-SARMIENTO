// src/components/OrgIdentity.jsx
import React from 'react';

const OrgIdentity = () => {
  return (
    <section id="orgIdentity" className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">2. Identidad Organizacional</h1>

      {/* Misión */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Misión</h2>
        <p>
          En <strong>Samsung</strong>, nuestra misión es <strong>crear experiencias innovadoras de audio</strong> que conecten a las personas de manera significativa, mejoren su calidad de vida y faciliten la comunicación. Nos esforzamos por desarrollar tecnologías de audio que ofrezcan la mejor calidad de sonido y comodidad para nuestros usuarios, sin importar el entorno en el que se encuentren.
        </p>
        <p>
          Además, buscamos integrar nuestras soluciones de audio en un <strong>ecosistema de dispositivos</strong> que permita a los usuarios una experiencia fluida y conectada, tanto en su vida diaria como en el trabajo.
        </p>
      </div>

      {/* Visión */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Visión</h2>
        <p>
          Nuestra visión es <strong>convertirnos en líderes mundiales en soluciones de audio premium</strong>, impulsando el futuro de la <strong>conectividad inalámbrica</strong>. A través de la innovación constante, aspiramos a ser la primera opción para los consumidores que buscan productos de audio de alta calidad que mejoren tanto su vida personal como profesional.
        </p>
        <p>
          Samsung está comprometida con el avance de la tecnología inalámbrica, liderando la transformación del mercado hacia un mundo en el que la conectividad y la calidad de sonido sean accesibles en todo momento, sin comprometer la libertad de movimiento y la comodidad del usuario.
        </p>
        <p>
          Nuestra meta es transformar la manera en que las personas experimentan el sonido, con una oferta diversa de productos que se adaptan a las necesidades cambiantes de los usuarios, desde el entretenimiento hasta la productividad.
        </p>
      </div>

      {/* Políticas */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Políticas</h2>
        <p>
          Samsung se compromete a operar bajo los principios de <strong>sostenibilidad, calidad e innovación</strong>. Estamos dedicados a desarrollar productos de <strong>alta tecnología</strong> que no solo cumplan con las expectativas de nuestros clientes, sino que también respeten el medio ambiente y las comunidades en las que operamos.
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Sostenibilidad</strong>: Nos esforzamos por minimizar el impacto ambiental de nuestros productos y procesos mediante la adopción de materiales reciclables, la reducción de la huella de carbono y el uso eficiente de recursos en todas nuestras operaciones.
          </li>
          <li>
            <strong>Calidad</strong>: En Samsung, la calidad es una prioridad. Todos nuestros productos pasan por rigurosos controles de calidad para garantizar que los usuarios reciban el mejor rendimiento, durabilidad y experiencia de usuario.
          </li>
          <li>
            <strong>Innovación constante</strong>: Creemos en la importancia de la <strong>investigación y desarrollo</strong> (I+D) para estar a la vanguardia de la industria. Cada producto de Samsung es el resultado de un proceso continuo de innovación para ofrecer soluciones que mejoren la vida de nuestros usuarios.
          </li>
        </ul>
        <p>
          Estas políticas nos guían en nuestro día a día y en nuestra visión a largo plazo, con el objetivo de seguir siendo un referente en la industria de la tecnología.
        </p>
      </div>
    </section>
  );
};

export default OrgIdentity;
