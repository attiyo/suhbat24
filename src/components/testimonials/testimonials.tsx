import { USERS } from "@/constants";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it - hear what our users have to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {USERS.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
