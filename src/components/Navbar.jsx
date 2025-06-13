import LogoutButton from "./LogoutButton";
import MostrarSesion from "./SesionComp";

function Navbar(){
    
    return (
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              To Do App
            </span>
          </a>

          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a 
                  href="/" 
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                  aria-current="page"
                >
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    Inicio
                  </span>
                </a>
              </li>
              
              <li>
                <a 
                  href="/Dashboard" 
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                    Tareas
                  </span>
                </a>
              </li>
              
              <li>
                <a 
                  href="/Categorias" 
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
                    </svg>
                    Categorías
                  </span>
                </a>
              </li>
              
              <li className="relative group">
                <button className="flex items-center py-2 px-3 text-gray-900 rounded md:p-0 dark:text-white">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <MostrarSesion />
                  </span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                
                <div className="absolute right-0 z-10 hidden group-hover:block w-48 bg-white rounded-md shadow-lg dark:bg-gray-700 py-1">
                  <a 
                    href="/login" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Iniciar sesión
                  </a>
                  <a 
                    href="/registro" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                  >
                    Registrarse
                  </a>
                  <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                  <LogoutButton className="block px-4 py-2 text-sm w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}

export default Navbar;