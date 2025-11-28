export default function Disclaimer() {

    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (

        <>
            <div className="bg-white dark:bg-black min-h-screen px-4 sm:px-8 md:px-16 pb-8 pt-28 text-black dark:text-gray-300">
                <div className="max-w-5xl mx-auto space-y-8">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-2">Disclaimer</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: November 28, 2025</p>
                    </div>

                    <section className="mb-10">
                        <div className="space-y-4">
                            <p>
                                This site, <a href="https://www.exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">www.exbot.in</a>, is an independent business entity and is not a part of WhatsApp or Meta Platforms, Inc. We operate solely as a Meta Tech Provider, facilitating and extending certain options for business use of the WhatsApp Cloud API.
                            </p>
                            <p>
                                Mentioned brand names, service names, or logos (including WhatsApp and Meta) are the properties of their respective owners.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Service Purpose and Limitation of Liability</h2>
                        <div className="space-y-4">
                            <p>
                                exbot is a Software-as-a-Service (SaaS) tool designed to facilitate and extend specific, permitted options within the WhatsApp ecosystem, primarily through automation and chatbot functionalities for efficiency.
                            </p>
                            <p>
                                The information provided on this website is for educational and illustrative purposes only. We neither support nor can be held responsible for any misuse of the Exbot service or the information provided.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">User Responsibility and Compliance</h2>
                        <div className="space-y-4">
                            <p>
                                The user/buyer must utilize the Exbot service responsibly and is required to strictly adhere to:
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>All applicable laws and regulations in their operational jurisdiction.</li>
                                <li>The full Terms of Service and Usage Policies established by WhatsApp and Meta Platforms, Inc.</li>
                                <li>The acceptable use policies of Exbot.in.</li>
                            </ol>
                            <p>
                                exbot is not a spam tool. The service is strictly prohibited from being used for spamming, bulk unsolicited messaging, or any activity that violates the policies of WhatsApp or Meta. The service automates permitted human behavior (such as saving time in data collection or customer interaction) and we do not take responsibility for how the buyer misuses this software.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Legal Jurisdiction</h2>
                        <div className="space-y-4">
                            <p>
                                All disputes arising from or relating to the use of Exbot.in are subject to the exclusive jurisdiction of the High Court of Kerala, India.
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