import { STATS } from "@/constants";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <div className="bg-blue-900/50 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
