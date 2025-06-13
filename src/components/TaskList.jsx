import { useState, useEffect } from "react";
import { getTasks, deleteTask, updateTask } from "../services/tareaService";
import { taskObserver } from "../services/tareaObserver";
import { supabase } from "../services/supabaseClient";
import EditTaskModal from "./EditTask";
import { useNavigate } from "react-router-dom";

function TaskList() {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);


    const loadTasks = async () => {
        const {data: {user}} = await supabase.auth.getUser();

        if(!user){
            navigate("/403");
            return
        }
        const t = await getTasks(user.id);
        setTasks(t);
    }

    useEffect(() => {
        loadTasks();
        taskObserver.subscribe(loadTasks);
        return () => taskObserver.unsubcribe(loadTasks);
    }, []);

    const toggleComplete = async (id, current) => {
        await updateTask(id, {completed: !current });
        taskObserver.notify();
    }

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(prev => prev.filter(task => task.id !== taskId));
        } catch(error) {
            console.error("Error al eliminar: ", error.message);
        }
    };

    const handleUpdate = (updatedTask) => {
        setTasks((prev) =>
        prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

    return (
        <div className="mt-15 space-y-2">
        {tasks.map((task) => (
            <div key={task.id} className="p-3 bg-gray-100 rounded flex justify-between items-center">
            <div>
                <h3 className={`font-bold ${task.completed ? "line-through text-gray-400" : ""}`}>{task.title}</h3>
                <p>{task.description}</p>
                <p className="text-sm text-gray-500">Vence: {task.due_date}</p>

                    <p className="text-sm text-purple-600">
                        Categoría: {task.category_name || "Sin categoría"}
                    </p>

                <button
                    onClick={() => setEditingTask(task)}
                    className="text-sm text-blue-500 hover:text-blue-700"
                    >
                    Editar
                </button>

            </div>
            <div className="flex gap-2">
                <button onClick={() => toggleComplete(task.id, task.completed)}
                className="text-sm bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-600 cursor-pointer">
                {task.completed ? "Desmarcar" : "Completar"}
                </button>
                <button onClick={() => handleDelete(task.id)} className="text-sm text-red-500 hover:text-red-900 cursor-pointer">Eliminar</button>
            </div>
            </div>
        ))}

        {editingTask && (
            <EditTaskModal
                task={editingTask}
                onClose={() => setEditingTask(null)}
                onUpdate={handleUpdate}
            />
        )}
        </div>
    );
}

export default TaskList;