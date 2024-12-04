import supabase from "./Supabase";

export async function getExecutiveDesk() {


    const { data, error } = await supabase
        .from('executiveDesks')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Office Chairs Could Not Be Loaded")
    }

    return data;
}


