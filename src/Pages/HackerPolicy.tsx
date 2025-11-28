export default function HackerPolicy() {

    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (

        <>
            <div className="bg-white dark:bg-black min-h-screen px-4 sm:px-8 md:px-16 pb-16 pt-28 text-black dark:text-gray-300">

                <div className="max-w-5xl mx-auto space-y-8">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-2">Hacker Policy Warning</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Effective Date: November 28, 2025</p>
                    </div>

                    <section className="mb-8">
                        <div className="space-y-4">
                            <p>
                                At exbot.in, the security and integrity of our WhatsApp API and Chatbot services are paramount. Unauthorized attempts to access, hack, disrupt, or otherwise compromise the services provided by Exbot are strictly prohibited and will be met with immediate legal action.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Prohibited Activities</h2>
                        <div className="space-y-4">
                            <p>
                                This policy strictly prohibits all unauthorized security testing, exploitation, and malicious activities, including but not limited to:
                            </p>
                            <p>
                                <strong>1. Unauthorized Penetration Testing:</strong> Conducting any form of penetration testing, vulnerability scanning, or security auditing against <a href="https://www.exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">www.exbot.in</a> or its associated infrastructure without the Company's prior written consent.
                            </p>
                            <p>
                                <strong>2. Deployment of Malicious Code:</strong> Introducing or deploying any malicious software, scripts, code, or malware (including viruses, worms, and ransomware).
                            </p>
                            <p>
                                <strong>3. System Misuse:</strong> Attempts to exploit, misuse, or interfere with system vulnerabilities, data privacy, or the normal operation of the Service.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Legal Consequences</h2>
                        <div className="space-y-4">
                            <p>
                                Violators of this policy will be reported to the appropriate law enforcement authorities in Kerala, India, and globally. Legal actions will be pursued vigorously in accordance with applicable cybercrime and information technology laws.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Immediate Action and Data Logging</h2>
                        <div className="space-y-4">
                            <p>
                                We take cybersecurity seriously and employ robust systems to protect our platform. Be advised that any attempt to access, exploit, or disrupt our services without authorization will trigger immediate security protocols.
                            </p>
                            <p>
                                We log and permanently save all identifying data associated with malicious attempts, including:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Your original IP address, even if masked through VPN, proxy services, or other anonymization techniques.</li>
                                <li>Your geographical location based on advanced detection mechanisms.</li>
                                <li>Any other identifiable digital fingerprint information where applicable.</li>
                            </ul>
                            <p>
                                This information will be legally preserved and transferred to government and law enforcement authorities for investigation and prosecution under all applicable cybercrime laws.
                            </p>
                            <p>
                                <strong>Important Note:</strong> Our software service provider has implemented cutting-edge technology capable of bypassing common VPN-based masking and other anonymization techniques to trace the origin of any malicious activity with high accuracy.
                            </p>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Responsible Disclosure for Ethical Hackers</h2>
                        <div className="space-y-4">
                            <p>
                                We encourage and welcome responsible disclosure from ethical hackers who identify genuine security issues.
                            </p>
                            <p>
                                If you have discovered a vulnerability or wish to report a security issue ethically and responsibly, please contact us immediately:
                            </p>
                            <p>
                                Email: <a href="mailto:care@exbot.in" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">care@exbot.in</a>
                            </p>
                            <p>
                                We are committed to addressing legitimate security concerns swiftly and confidentially.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8 mt-12">
                        <div className="text-center italic">
                            <p>Thank you for respecting the integrity and security of our platform.</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}