import { useEffect, useState } from "react";
import { categoryObserver } from "../services/categoryObserver";
import { deleteCategory, getCategories } from "../services/categoryService";
import {supabase} from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const load = async () => {
        const {data: {user}} = await supabase.auth.getUser();

        if(!user){
            navigate("/403");
        }

        if(!user) return;
        const cats = await getCategories(user.id);
        setCategories(cats);
      };

      load();
      categoryObserver.subscribe(load);
      return () => categoryObserver.unsubscribe(load);
    }, []);

    const handleDelete = async (id) => {
        await deleteCategory(id);
        categoryObserver.notify();
    }

    return (
        <div className="flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Lista de Categorías</h2>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li key={category.id} className="flex justify-between items-center">
                            <span>{category.name}</span>
                            <button
                                onClick={() => handleDelete(category.id)}
                                className="text-red-600 hover:text-red-800 cursor-pointer"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}