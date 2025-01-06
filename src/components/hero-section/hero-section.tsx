import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Stats from "@/components/stats/stats";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HeroSection() {
  return (
    <header className="pt-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {/*  TODO: Replace with actual image */}
        <img
          src="/hero-pattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="max-w-xl"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with Top Software Engineers & IELTS Experts
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Book 1-on-1 video sessions with experienced professionals for
              personalized guidance and mentorship
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 border border-blue-600 hover:border-blue-700 focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-150 ease-in-out">
                  Find Your Expert
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="text-blue-600 border-white hover:text-white hover:bg-blue-700"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/*  TODO: Replace with actual image */}
            <img
              src="https://talking-talent.com/wp-content/uploads/2022/03/Woman-video-calling-min-1280x854.png"
              alt="Platform Preview"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <Stats />
    </header>
  );
}
