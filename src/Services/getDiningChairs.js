import supabase from "./Supabase";

export async function getDiningChairs() {


    const { data, error } = await supabase
        .from('DiningChairs')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Dining Chairs Could Not Be Loaded")
    }

    return data;
}