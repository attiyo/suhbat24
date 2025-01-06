import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export default function Nav() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.a
            href="/"
            className="font-bold text-xl text-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            Talk24
          </motion.a>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <a href="#features">Features</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#experts">Experts</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#testimonials">Testimonials</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/login">Sign In</a>
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              asChild
            >
              <a href="/register">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
