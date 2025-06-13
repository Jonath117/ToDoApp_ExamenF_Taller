import { useEffect } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

function HomeComp() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) navigate("/dashboard");
    });
  }, []);

  return (
    <div className="mt-30 max-w-2xl mx-auto p-6 text-center bg-gray-100 rounded-md shadow-xl bg-gray-300 p-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Bienvenido a TaskMaster</h1>
      <p className="text-gray-600 mb-6">
        Organiza tus tareas, cumple tus objetivos y mejora tu productividad diaria.
      </p>

      <div className="flex justify-center gap-4">
        <a href="/login" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 rounded-xl">
          Iniciar Sesión
        </a>
        <a href="/registro" className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 rounded-xl">
          Registrarse
        </a>
      </div>

      <img
        src="src\assets\images\fondo_tareas.png"
        alt="Organiza tus tareas"
        className="mt-8 w-full max-w-md mx-auto rounded-md"
      />

        <p className="mt-30 bg-indigo-50 text-indigo-700 font-semibold p-3 rounded-md border-l-4 border-indigo-500">
        Recuerda que tienes que tener una sesion activa para poder usar el To Do ;)
        </p>

    </div>
  );
}

export default HomeComp;