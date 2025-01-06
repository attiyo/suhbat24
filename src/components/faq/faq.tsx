import { FAQ } from "@/constants";
import { motion } from "framer-motion";

export default function Faq() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FAQ.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
