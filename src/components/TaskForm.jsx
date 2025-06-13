import { useState, useEffect } from "react";
import { createTask } from "../services/tareaService";
import { taskObserver } from "../services/tareaObserver";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

function TaskForm() {
    const navigate = useNavigate();
    const [task, setTask] = useState ({
        title: "",
        description: "",
        due_date: "",
        category_id: "",
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const {data: {user}} = await supabase.auth.getUser();
            if(!user) return;
            const {data} = await supabase.from("categories").select("*").eq("user_id", user.id);
            setCategories(data || []);
        };
        loadCategories();
    }, []);

    const handleChange = (e) => {
          const { name, value } = e.target;
          setTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data: {user}} = await supabase.auth.getUser();

        if(!user){
            navigate("/403");
            return
        }

        const cleanedTask = {
            ...task,
            category_id: task.category_id === "" ? null : task.category_id
        };

        const newTask = await createTask(cleanedTask, user.id);
        taskObserver.notify();
        setTask({title: "", description: "", due_date: "", category_id: ""});

    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <div className="mb-2">
                <label htmlFor="title" className="block mb-1 font-semibold">Título</label>
                <input
                    id="title"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Título"
                    className="border p-2 w-full rounded"
                    required
                />
            </div>

            <div className="mb-2">
                <label htmlFor="description" className="block mb-1 font-semibold">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    placeholder="Descripción"
                    className="border p-2 w-full rounded"
                />
            </div>

            <div className="mb-2">
                <label htmlFor="due_date" className="block mb-1 font-semibold">Fecha</label>
                <input
                    id="due_date"
                    name="due_date"
                    type="date"
                    value={task.due_date}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                    required
                />
            </div>

            <div className="mb-2">
                <label htmlFor="category_id" className="block mb-1 font-semibold">Categoría</label>
                <select
                    id="category_id"
                    name="category_id"
                    value={task.category_id}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                >
                    <option value="">Sin categoría</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 cursor-pointer"
            >
                Guardar Tarea
            </button>
        </form>
    );
}

export default TaskForm;