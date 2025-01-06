import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users learning from top experts
          </p>
          <motion.div
            className="space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
