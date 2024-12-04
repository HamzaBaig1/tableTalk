import supabase from "./Supabase";

export async function getOfficeChairsVisitor() {


    const { data, error } = await supabase
        .from('OfficeChairsVisitor')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Office Chairs Could Not Be Loaded")
    }

    return data;
}