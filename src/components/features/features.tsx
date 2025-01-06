import { FEATURES } from "@/constants";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Talk24?</h2>
          <p className="text-gray-600">
            Our platform provides seamless connections between learners and
            experts, ensuring quality mentorship and guidance every step of the
            way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
