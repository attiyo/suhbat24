import { motion } from "framer-motion";
import { Code, Languages, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experts() {
  return (
    <section id="experts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Expert Categories</h2>
          <p className="text-gray-600">
            Choose from our carefully selected experts specializing in different
            areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Software Engineers</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Technical mentorship and code reviews
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Career guidance and interview prep
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Architecture and best practices
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Problem-solving sessions
              </li>
            </ul>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Find a Software Engineer
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Languages className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">IELTS Experts</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Speaking practice and feedback
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Writing assessment and tips
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Test-taking strategies
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Mock test preparation
              </li>
            </ul>
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Find an IELTS Expert
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
