import {supabase} from "./supabaseClient"

export async function getCategories(userId) {
    const {data, error} = await supabase
        .from("categories")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", {ascending: false})
    return data;
}

export async function createCategories(name, userId) {
    const {data, error} = await supabase
        .from("categories")
        .insert({name, user_id: userId})
        .select();
    if(error) throw error;
    return data[0];
}

export async function deleteCategory(id) {
    return await supabase.from("categories").delete().eq("id", id);
}