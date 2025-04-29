import { CommonApi } from "./CommonApi";


// Base url
const Base_url = "https://admin.exstudio.in/exbot"



// Post customer form
export const PostCustomerForm = async (data: FormData) =>{

    return await CommonApi("POST", `${Base_url}/customerpolicymanagement/`, data , "")

}