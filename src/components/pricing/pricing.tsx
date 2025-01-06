import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import { PRICING } from "@/constants";

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600">
            Choose the package that best suits your learning needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-sm p-8 relative ${
                plan.popular
                  ? "border-2 border-blue-600"
                  : "border border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full px-3 py-1 text-white text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-600">
                    /mo
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
