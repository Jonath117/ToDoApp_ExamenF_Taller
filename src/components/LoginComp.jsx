import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

function LoginApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    setEmail("");
    setPassword("");
    setMensaje("");

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate("/dashboard");
      }
    };
    checkUser();
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMensaje(error.message);
    } else {
      setMensaje("Ingreso exitoso");
      setTimeout(() => navigate("/dashboard"), 1500);
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 border rounded-md mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 border rounded-md mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 rounded-xl">Entrar</button>

        {mensaje && <p className="text-sm text-center mt-4">{mensaje}</p>}
      </form>
    </div>
  );
}

export default LoginApp;
