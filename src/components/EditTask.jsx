import { useState, useEffect } from "react";
import { updateTask } from "../services/tareaService";
import { getCategories } from "../services/categoryService";
import { supabase } from "../services/supabaseClient";

function EditTaskModal({ task, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    category_id: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const cats = await getCategories(user.id); 
      setCategories(cats);
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const updated = await updateTask(task.id, formData);
      onUpdate(updated);
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Error al actualizar:", err.message);
    }
  };

  if (!task) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Editar Tarea</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border mb-2 p-2"
          placeholder="Título"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border mb-2 p-2"
          placeholder="Descripción"
        />
        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          className="w-full border mb-4 p-2"
        />

        <select
          name="category_id"
          value={formData.category_id || ""}
          onChange={handleChange}
          className="border p-2 w-full mb-2 rounded"
        >
          <option value="">Sin categoría</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>



        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
