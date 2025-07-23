import { Helmet } from "react-helmet";
import OurTeam from "../components/OurTeam";
import { motion } from "framer-motion";

export default function About() {
    return (<>
        <Helmet>
            <title>About Us | MAICAT</title>
        </Helmet>
        <div>
            <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-blue-100 to-white">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-blue-800"
                >
                    The Science of Stopping Medicine
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-4 text-lg max-w-2xl text-gray-700"
                >
                    MAICAT (Metabolic And Immune Correction Approach to Treatment) is a revolutionary health paradigm focused on root cause healing — reversing chronic diseases without lifelong medicines.
                </motion.p>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-10 py-16 px-6 md:px-20 bg-blue-50">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision & Mission</h2>
                    <p className="text-gray-700 mb-4">
                        Dr. Vipul realized early on that medicines often don’t address the root of chronic illnesses. After deep research, he discovered how food, environment, toxins, and even medicines are often the biggest causes.
                    </p>
                    <p className="text-gray-700">
                        MAICAT’s mission is to stop or reduce medicines by addressing the true causes of disease — lifestyle, diet, and toxin exposure.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4"
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="font-semibold text-lg text-green-700">MAICAT Vision</h3>
                        <p className="text-sm text-gray-600">To see the world healthy, fit, and confident, individuals proud of their body.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="font-semibold text-lg text-green-700">MAICAT Mission</h3>
                        <p className="text-sm text-gray-600">Make everyone medicine-free by treating the root causes of diseases with personalized lifestyle correction.</p>
                    </div>
                </motion.div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white px-6 md:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-blue-800 mb-10"
                >
                    What Sets Us Apart
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "Online treatment sessions from home",
                        "Step-by-step documents post consultation",
                        "Natural & authentic product guidance",
                        "Dedicated support via calls & chat",
                        "Access to private learning channel",
                        "Root cause resolution, not symptom masking"
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-blue-100 p-6 rounded-xl text-blue-900 font-medium shadow-sm"
                        >
                            ✅ {feature}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-blue-800 text-white py-16 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                    { value: '12+', label: 'Years Reversing Diseases' },
                    { value: '15+', label: 'Countries Global Presence' },
                    { value: '15+', label: 'Health Consultants' },
                    { value: '15K+', label: 'Happy Clients Globally' },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-blue-700 rounded-xl py-6"
                    >
                        <h3 className="text-3xl font-bold">{item.value}</h3>
                        <p className="text-sm mt-2">{item.label}</p>
                    </motion.div>
                ))}
            </section>
            <OurTeam />
        </div>
    </>
    )
}