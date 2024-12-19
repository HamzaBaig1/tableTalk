import supabase from "./Supabase";

export async function getWorkstations() {


    const { data, error } = await supabase
        .from('Workstation')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Workstations Could Not Be Loaded")
    }

    return data;
}


