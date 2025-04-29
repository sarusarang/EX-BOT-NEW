import { useMutation } from "@tanstack/react-query";
import { PostCustomerForm } from "@/Service/AllApi";



// Post customer form
export const AddcustomerForm = () => {


    interface MutationParams {
        formData: FormData;
    }

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            const Response = await PostCustomerForm(formData)

            return Response

        },

        onError: (error) => {
            console.error("Failed to add customer form", error);
        },
    })

}