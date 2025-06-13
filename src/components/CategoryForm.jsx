import { useState } from "react";
import { categoryObserver } from "../services/categoryObserver";
import { createCategories } from "../services/categoryService";
import {supabase} from "../services/supabaseClient";

export default function CategoryForm() {
    const[name, setName] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {data: {user} } = await supabase.auth.getUser();
        if(!user) return;

        const newCategory = await createCategories(name, user.id);
        categoryObserver.notify(newCategory);
        setName("");
    };

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Nueva Categoría</h2>
                <input
                    type="text"
                    placeholder="Nombre de la categoría" required
                    className="w-full p-2 border rounded-md mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 rounded-xl cursor-pointer">Agregar Categoría</button>
            </form>
        </div>
    );
}