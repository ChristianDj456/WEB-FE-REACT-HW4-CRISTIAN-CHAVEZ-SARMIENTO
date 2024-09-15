import samsungIcon from "../assets/samsungIcon.svg";
import galaxyAI from "../assets/galaxyAi.webp";

const Header = () => {
  return (
    <header className="bg-gray-200 py-0 px-6 text-black top-0 w-full z-50 mt-0">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Contenedor de las dos imágenes */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <img src={samsungIcon} alt="Samsung" className="w-24 h-24" />
          <img src={galaxyAI} alt="Galaxy AI is here" className="w-15 h-10" />
        </div>

        <p className="text-center sm:text-left">Galaxy Buds3 Pro is a registered trademark of Samsung Electronics Co., Ltd.</p>

      </div>
    </header>
  );
};

export default Header;

