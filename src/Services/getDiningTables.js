import supabase from "./Supabase";

export async function getDiningTables() {


    const { data, error } = await supabase
        .from('DiningTables')
        .select('*')


    if (error) {
        console.error(error);
        throw new Error("Dining Chairs Could Not Be Loaded")
    }

    return data;
}