import supabase from "./Supabase";

export async function getStudyDesk() {


    const { data, error } = await supabase
        .from('StudyDesks')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Office Chairs Could Not Be Loaded")
    }

    return data;
}


