import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pag403() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "403 - Acceso Denegado";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">403</h1>
      <h2 className="text-2xl font-semibold mt-4">Acceso denegado</h2>
      <p className="text-gray-600 mt-2">No tienes permiso para ver esta página.</p>
      <p className="bg-pink-50 text-pink-500 font-semibold p-3 rounded-md border-l-4 border-pink-500">
        Recuerda que tienes que tienes que iniciar sesion o registrarte si no lo has hecho
        </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 rounded-xl"
      >
        Volver al inicio
      </button>
    </div>
  );
}

export default Pag403;
