
export default function Disclaimer() {

    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (


        <>

            <div className="bg-white dark:bg-black min-h-screen px-4 sm:px-8 md:px-16 pb-8 pt-28 text-black dark:text-gray-300">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 15/08/2024</p>
                    </div>

                    <section className="mb-8">
                        <div className="space-y-4">
                            <p>
                                exbot.in is not a part of WhatsApp or Facebook / Meta. (We are Meta's Tech Providers only)
                                Mentioned names or logos are properties of their respective companies.
                                The content provided on this website is for educational purposes only.
                                We do not endorse or take responsibility for any misuse of this information.
                                This tool is not associated with any brand or website.
                                Users are expected to use the software responsibly and comply with the applicable terms of use or policies.
                            </p>
                            <p>
                                This is a tool designed to enhance and extend certain features of WhatsApp.
                                It is not a spam tool and must not be used for spamming or violating WhatsApp's policies.
                                The tool automates natural human behavior to save time in manually gathering data that is already publicly available.
                                We are not responsible for how users choose to utilize this software.
                                All legal disputes are subject to the jurisdiction of the High Court of Kerala, India.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8 mt-12">
                        <div className="text-center italic">
                            <p>Thank you for using ExBot. Please use our services responsibly.</p>
                        </div>
                    </section>
                </div>
            </div>



        </>


    )


}
