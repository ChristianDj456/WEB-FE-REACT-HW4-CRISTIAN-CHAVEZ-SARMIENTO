import githubIcon from '../assets/githubIcon.svg';
import linkedinIcon from '../assets/linkedinIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import youtubeIcon from '../assets/youtubeIcon.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center sticky bottom-0 w-full">
      <p>&copy; 2024 By Cristian Chavez Sarmiento. All rights reserved.</p>

      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/ChristianDj456" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/cristian-chavez-227a7b263" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/christ_4562/?hl=es" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://www.youtube.com/@christiandejesuschavezsarm6635/featured" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
        </a>
      </div>

      {/* Menú de navegación */}
      <nav className="flex flex-col sm:flex-row sm:space-x-6 justify-center mt-4">
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
    </footer>
  );
};

export default Footer;


