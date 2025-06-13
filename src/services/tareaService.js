import { supabase } from "./supabaseClient";

export const createTask = async (task, userId) => {
    const {data, error} = await supabase
        .from("tasks")
        .insert([{ ...task, user_id: userId }])
        .select();

    if(error) throw error;
    if(!data || data.length === 0) return null;

    return data[0];
};

export const getTasks = async (userId) => {
    const { data, error } = await supabase
        .from("tasks")
        .select(`
            *,
            categories!tasks_category_id_fkey(name)
        `)
        .eq("user_id", userId)
        .order("due_date", { ascending: true });

    if (error) throw error;
    
    return data.map(task => ({
        ...task,
        category_name: task.categories?.name || null
    }));
};

export const updateTask = async (id, updates) => {
        const cleanedUpdates = {
        ...updates,
        category_id: updates.category_id === "" ? null : updates.category_id
    };

    const {data, error} = await supabase
        .from("tasks")
        .update(cleanedUpdates)
        .eq("id", id)
        .select("*");
    if(error) throw error;
    if(!data || data.length === 0) return null;

    return data[0];
}

export const deleteTask = async (id) => {
    const {data, error} = await supabase
        .from("tasks")
        .delete()
        .eq("id", id)
    if(error) throw error;
    return data;
}   