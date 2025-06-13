import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

function MostrarSesion(){
    const[isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const {data: {user}} = await supabase.auth.getUser();
            setisLoggedIn(!!user);
            
        };

        checkUser();
    }, []);

    return(
        <div className={isLoggedIn ? "text-green-600" : "text-red-600"}>
            <h2>{isLoggedIn ? "Sesion Activa" : "Sesion Inactiva"}</h2>
        </div>
    )
}

export default MostrarSesion;