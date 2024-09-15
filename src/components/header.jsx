import React from "react";
import samsungIcon from "../assets/samsungIcon.svg";
import galaxyAI from "../assets/galaxyAi.webp";

const Header = () => {
  return (
    <header className="bg-gray-200 py-0 px-6 text-black sticky top-0 w-full z-50 mt-0">
      <div className="flex items-center justify-between">
        {/* Contenedor de las dos imágenes */}
        <div className="flex items-center space-x-2">
          <img src={samsungIcon} alt="Samsung" className="w-24 h-24" />
          <img src={galaxyAI} alt="Galaxy AI is here" className="w-15 h-10" />
        </div>

        {/* Menú de navegación */}
        <nav className="flex flex-col sm:flex-row sm:space-x-6">
          <a href="#introduction" className="text-lg hover:text-blue-400">
            Introducción
          </a>
          <a href="#swot" className="text-lg hover:text-blue-400">
            Diagnóstico
          </a>
          <a href="#orgIdentity" className="text-lg hover:text-blue-400">
            Identidad
          </a>
          <a href="#goals" className="text-lg hover:text-blue-400">
            Objetivos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
