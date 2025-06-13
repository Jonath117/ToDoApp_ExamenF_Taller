import {supabase} from "../services/supabaseClient"

function LogoutButton () {

    function mostrarAlerta(){
        alert("Sesion cerrada");
    }

    const handleLogout = async () => {
        const {error} = await supabase.auth.signOut();
        if(error){
            console.error("Error cerrando sesion: ", error.message);
        } else {
            window.location.reload();
            mostrarAlerta();
        }
    }


    return (
        <button 
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
        >
            Cerrar Sesion
        </button>
    )
};

export default LogoutButton; 