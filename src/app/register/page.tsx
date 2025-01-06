"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Eye, EyeOff, Users } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"user" | "expert">("user");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.div
            className="mx-auto h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <Users className="h-6 w-6 text-white" />
          </motion.div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </a>
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <motion.button
            className={`px-4 py-2 rounded-md ${
              userType === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setUserType("user")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join as User
          </motion.button>
          <motion.button
            className={`px-4 py-2 rounded-md ${
              userType === "expert"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setUserType("expert")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join as Expert
          </motion.button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {userType === "expert" && (
              <div>
                <label
                  htmlFor="expertise"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Area of Expertise
                </label>
                <select
                  id="expertise"
                  name="expertise"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option>Software Engineering</option>
                  <option>IELTS Teaching</option>
                </select>
              </div>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>

          <div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Create Account
              </Button>
            </motion.div>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full">
                {/* // FIXME: Fix Google icon */}
                <img
                  src="https://www.figma.com/community/resource/9043ad92-248b-4d9c-8fb9-22d27a474316/thumbnail"
                  alt="Google"
                  className="w-50 h-7 mr-1"
                />
                Google
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" className="w-full">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s"
                  alt="GitHub"
                  className="w-50 h-7 mr-2"
                />
                GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
