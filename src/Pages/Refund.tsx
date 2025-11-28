export default function Refund() {

    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (
        <>
            <div className="bg-white dark:bg-black min-h-screen px-4 sm:px-8 md:px-16 pb-16 pt-28 text-black dark:text-gray-300">

                <div className="max-w-5xl mx-auto space-y-8">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: November 28, 2025</p>
                    </div>

                    <section className="mb-8">
                        <div className="space-y-4">
                            <p>
                                At exbot (a subsidiary of Exmedia, based in Kerala, India), we are committed to providing reliable WhatsApp API and Chatbot services. This policy outlines the specific circumstances under which refunds are considered, maintaining transparency and fairness.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">When You Qualify for a Refund</h2>
                        <div className="space-y-4 pl-4">
                            <p>
                                A refund may be granted only if the following conditions are met:
                            </p>
                            <p>
                                <strong>✔️ The API Service is Materially Not as Described:</strong> If the exbot service you purchased is materially and verifiably different from its official description or documentation, and this variance significantly impairs its core intended function.
                            </p>
                            <p>
                                <strong>✔️ Critical, Unresolvable Service Failure:</strong> If the exbot API service experiences a critical, major bug or issue that prevents it from functioning as intended, and the Company is unable to provide a functional resolution or patch within a reasonable timeframe (as determined by Exbot). If the issue can be promptly resolved via an update, a refund will not be issued.
                            </p>
                            <p>
                                <strong>✔️ Serious Security Vulnerability:</strong> If the exbot core service contains a serious security vulnerability that directly compromises customer data and cannot be patched quickly. If a fix can be deployed quickly, we will release an update instead of processing a refund.
                            </p>
                            <p>
                                <strong>✔️ Failure to Provide Contracted Support:</strong> If You purchased a dedicated support package and the Company fails to provide the level of support promised in accordance with the specified support policy, You are entitled to a refund for the support component of the purchase only.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">When Refunds Are Not Available (Non-Refundable Situations)</h2>
                        <div className="space-y-4 pl-4">
                            <p>
                                We do not issue refunds in the following situations:
                            </p>
                            <p>
                                <strong>✖ Change of Mind:</strong> The service works as described, but You no longer require it, or You are not satisfied with the current feature set.
                            </p>
                            <p>
                                <strong>✖ Mistaken Purchase:</strong> The service was purchased by mistake.
                            </p>
                            <p>
                                <strong>✖ Lack of Expertise:</strong> You do not possess the necessary technical expertise or tools to correctly use or configure the WhatsApp API system.
                            </p>
                            <p>
                                <strong>✖ Third-Party Issues:</strong> The issue is caused by external factors, including but not limited to:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Failure of Third-party API Providers (e.g., WhatsApp/Meta Platforms): This includes downtime, changes to WhatsApp policies, account bans, or integration failures outside of Exbot's control.</li>
                                <li>Failure of Your internal systems, servers, or networking environment.</li>
                            </ul>
                            <p>
                                <strong>✖ Expiration of Refund Period:</strong> More than 30 days have passed since the date of Your purchase.
                            </p>
                            <p>
                                <strong>✖ Goodwill Requests:</strong> Requests for refunds based solely on "goodwill" or personal expectations not guaranteed in the service description.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">How to Request a Refund</h2>
                        <div className="space-y-4 pl-4">
                            <p>
                                If You believe You are eligible for a refund, You must submit a request via email to <a href="mailto:care@exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">care@exbot.in</a> within 7 days of Your purchase date. Requests submitted after 15 days will not be considered.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Force Refunds and Processing</h2>
                        <div className="space-y-4 pl-4">
                            <p>
                                Exbot reserves the right to issue a refund at its sole discretion without a request from the buyer. If a force refund is issued, access to the API service and associated support will be immediately revoked.
                            </p>
                            <p>
                                We will notify you once we have reviewed your request. If approved, you will be automatically refunded to your original payment method within 45 business days. Please allow additional time for Your bank or credit card company to process and post the refund.
                            </p>
                            <p>
                                If more than 45 business days have passed since we approved Your refund, please contact us at <a href="mailto:care@exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">care@exbot.in</a>.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8 mt-12">
                        <div className="text-center italic">
                            <p>Thank you for your understanding and for choosing ExBot.</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}