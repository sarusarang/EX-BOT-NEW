import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerModal from "@/Components/CustomerForm/CustomerModal";



export default function GDPRPolicy() {


    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);



    return (
        <>
            <div className="bg-white dark:bg-black min-h-screen px-4 sm:px-8 md:px-16 pb-16 pt-28 text-black dark:text-gray-300">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-2">GDPR Policy for exbot.in</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 09/01/2025</p>
                    </div>

                    <div className="space-y-6">
                        <p><strong>Introduction</strong><br />
                            At Exbot, your privacy and data security are our top priorities. Our AI-driven services strictly comply with GDPR regulations, following rigorous standards to safeguard your information during lead generation and customer interactions. This policy details our commitment to transparency and full adherence to the General Data Protection Regulation (GDPR).
                        </p>

                        <p><strong>About the GDPR</strong><br />
                            The General Data Protection Regulation (GDPR), enforced since May 25, 2018, is a comprehensive EU privacy law designed to protect personal data. It applies not only to organizations within the EU but also to any entity worldwide that handles EU residents' data. Personal data refers to any information that can identify an individual. GDPR sets strict standards for data collection, processing, storage, and sharing, empowering users with greater control over their privacy.
                        </p>

                        <p><strong>Services We Use That Are GDPR Compliant</strong><br />
                            We leverage the following GDPR-compliant services to support our platform:<br />
                            <a href="https://aws.amazon.com/" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Amazon AWS Services (Learn more)</a> <br />
                           <a href="https://razorpay.com/" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer"> Razor pay (Learn more)</a>
                           
                        </p>

                        <p><strong>What Information Do We Store?</strong><br />
                            <u>For exbot Customers:</u><br />
                            Email<br />
                            Password<br />
                            Stripe Payment Information<br /><br />

                            <u>For exbot Users:</u><br />
                            Facebook Scoped ID<br />
                            First Name<br />
                            Last Name<br />
                            Profile Picture URL<br />
                            Locale Code<br />
                            Gender<br />
                            Time Zone
                        </p>

                        <p><strong>How We Use This Personal Information</strong><br />
                            We process the data collected for the following purposes:<br /><br />
                            <u>For exbot Users:</u><br />
                            To send messages on behalf of exbot customers.<br />
                            To display users on the exbot Live Chat feature.<br /><br />

                            <u>For exbot Customers:</u><br />
                            To send email alerts about leads and marketing materials.<br />
                            To provide human-assisted support through chatbots upon user request.<br /><br />

                            We do not store any credit card information. Stripe handles all payment processes as a GDPR-compliant platform.
                        </p>

                        <p><strong>Allow Users to Delete Personal Data</strong><br />
                            We offer the following options for data deletion:<br />
                            <strong>Deactivation:</strong> Users can deactivate their accounts as a soft delete, allowing them to restore their account later.<br />
                            <strong>Permanent Deletion:</strong> Users can request permanent deletion by contacting us at <a href="mailto:care@exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">care@exbot.in</a>, and we will remove all associated data from our systems.<br />
                            <strong>Automated Deletion:</strong> Bot user data is automatically deleted after 90 days. Exbot customers can download data in Excel format before deletion.
                        </p>

                        <p><strong>How to Make Your Bot GDPR Compliant</strong><br />
                            To ensure your bot is GDPR-compliant:<br />
                            <strong>Document Consent:</strong> Add a Yes/No question to your bot asking for consent to send updates or save input data. Example: "Shall we send you the latest updates?"<br />
                            <strong>Provide Data on Request:</strong> Share the collected data upon user request by forwarding email notifications or downloading records from the Inbox section.<br />
                            <strong>Delete Data:</strong> Permanently delete user data from the Inbox section of the platform when requested.
                        </p>

                        <p><strong>Server Logs</strong> We maintain server logs for debugging and performance improvement, including:<br />
                            Logs from Facebook for chatbot optimization.<br />
                            IP addresses of websites hosting chatbots to monitor user activity and enable the Live Chat feature.
                        </p>

                        <p><strong>Privacy Policy</strong> You can review our detailed Privacy Policy at the following URL: <Link to="/privacypolicy" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">privacy-policy</Link></p>

                        <p><strong>Retention of Your Information</strong><br />
                            We retain user data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
                        </p>

                        <p><strong>How to Contact Us</strong><br />
                            If you have questions about this GDPR policy or wish to exercise your rights, contact us at:<br />
                            <strong>Email:</strong> <a href="mailto:care@exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">care@exbot.in</a><br />
                            <strong>Address:</strong> 12/550, CALICUT, KERALA 673633 India<br />
                            +91 8606123466<br />
                            Exbot is committed to maintaining the highest standards of data privacy and security.
                        </p>


                        <p><strong>I will do the same for one of my companies. I am attaching my company's website URL.</strong><br />
                            <a href="https://exbot.in/" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">https://exbot.in/</a>
                        </p>


                        <p><strong>Customer Privacy Management form</strong><br />
                            Please use the form below to <span onClick={() => setIsOpen(true)} className="underline hover:cursor-pointer text-blue-500">submit your privacy request.</span><br />
                            You may also email <code>privacy [at] exbot.in</code> with the details of your request, and we will be happy to assist.<br />
                            Exbot respects your privacy and is committed to handling your data with care and respect.
                        </p>


                    </div>

                </div>

                
            </div>



            {/* Customer Form Modal */}
            <CustomerModal isOpen={isOpen} setIsOpen={setIsOpen} />


        </>
    );
}
