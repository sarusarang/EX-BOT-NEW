import { Dialog, DialogContent } from "../ui/dialog";
import { Loader, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { AddcustomerForm } from "@/Hooks/FormHook";
import { toast } from "sonner";




// Modal props
interface CustomerModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}




// Form validation
const formSchema = z.object({

    request_for: z.enum(["Delete my data", "Get a copy of my data", "Right to edit"], {
        required_error: "Please select a request type",
        invalid_type_error: "Please select a valid request type",
    }),
    country: z.string().min(2, "Country must be at least 2 characters"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    
});





export default function CustomerModal({ isOpen, setIsOpen }: CustomerModalProps) {



    // Post customer form
    const { mutate, isPending } = AddcustomerForm()



    // Use form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            name: "",
            email: "",
            request_for: undefined,
            country: "",

        },
    });




    // Form submit
    const FormSubmit = (values: z.infer<typeof formSchema>) => {


        const formdata = new FormData()


        formdata.append("fullname", values.name)
        formdata.append("email", values.email)
        formdata.append("request_for", values.request_for)
        formdata.append("location", values.country)


        mutate({ formData: formdata }, {

            onSuccess: (response: any) => {

                if (response?.status >= 200 && response?.status < 300) {

                    toast.success("Form submitted successfully we will get back to you soon.")

                    form.reset()

                    setIsOpen(false)

                } else {

                    toast.error("Something went wrong, please try again.")
                    console.error(response)
                }

            }

        })


    }



    // Request types
    const requestTypes = ["Delete my data", "Get a copy of my data", "Right to edit"];


    return (


        <Dialog open={isOpen} onOpenChange={setIsOpen}>


            <DialogContent
                onPointerDownOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
                style={{ width: "100%", maxWidth: "62rem" }}
                className="p-0 overflow-hidden max-h-screen sm:h-[90vh] rounded-3xl bg-background shadow-2xl border border-border dark:border-neutral-800 overflow-y-auto"
            >


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 sm:p-10 bg-background text-foreground space-y-6 overflow-y-auto"
                >


                    <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
                        Privacy Request Form
                    </h2>


                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Please use the form below to submit your privacy request.
                        <br /><br />
                        You may also email <strong>privacy [at] wcapi.io</strong> with the details of your request.
                        Wcapi respects your privacy, and is committed to handling your personal data with care and respect.
                        <br /><br />
                        You can use this form to request a copy of your data, correct an inaccuracy, delete it, or opt out of sale.
                        Verify your request via the email you receive after submission.
                        For questions, email: <strong>privacy [at] exbot.in</strong>.
                        <br />
                        <Link to={'/privacypolicy'} className="text-green-600 underline">
                            Review our Privacy Policy
                        </Link>
                    </p>


                    <form className="space-y-5" onSubmit={form.handleSubmit(FormSubmit)}>


                        <fieldset className="space-y-3">
                            <legend className="font-medium">I would like to:</legend>
                            <div className="space-y-2">
                                {requestTypes.map((option) => (
                                    <label key={option} className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            value={option}
                                            {...form.register("request_for")}
                                            className="accent-green-600 w-4 h-4"
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                                {form.formState.errors.request_for && (
                                    <p className="text-red-500 text-sm">
                                        {form.formState.errors.request_for.message}
                                    </p>
                                )}
                            </div>
                        </fieldset>


                        <div>
                            <label className="block font-medium mb-1">Country / State</label>
                            <input
                                type="text"
                                {...form.register("country")}
                                className="w-full rounded-xl border border-input bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Your Country / State"
                            />
                            {form.formState.errors.country && (
                                <p className="text-red-500 text-sm">
                                    {form.formState.errors.country.message}
                                </p>
                            )}
                        </div>


                        <div>
                            <label className="block font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                {...form.register("name")}
                                className="w-full rounded-xl border border-input bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter Your Full Name"
                            />
                            {form.formState.errors.name && (
                                <p className="text-red-500 text-sm">
                                    {form.formState.errors.name.message}
                                </p>
                            )}
                        </div>


                        <div>
                            <label className="block font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                {...form.register("email")}
                                className="w-full rounded-xl border border-input bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="you@example.com"
                            />
                            {form.formState.errors.email && (
                                <p className="text-red-500 text-sm">
                                    {form.formState.errors.email.message}
                                </p>
                            )}
                        </div>


                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting || isPending}
                            className="mt-4 w-full flex hover:cursor-pointer items-center justify-center rounded-xl bg-green-600 hover:bg-green-700 text-white py-2 font-semibold transition"
                        >
                            {isPending ? <Loader className="animate-spin duration-75" /> : <Send size={16} className="mr-2" />}   SUBMIT REQUEST

                        </button>


                    </form>


                </motion.div>


            </DialogContent>


        </Dialog>
    );
}
