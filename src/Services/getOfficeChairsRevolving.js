import supabase from "./Supabase";

export async function getOfficeChairsRevolving() {


    const { data, error } = await supabase
        .from('OfficeChairsRevolving')
        .select('*')


    if (error) {
        console.error(error);
        throw new Error("Office Chairs Could Not Be Loaded")
    }

    return data;
}