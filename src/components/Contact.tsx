"use client";
import {
  Mail,
  ArrowRight,
  ChevronDown,
  Phone,
  Calendar,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Zap,
  LifeBuoy,
  Share2,
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { set, useForm } from "react-hook-form";
import { connectMe } from "@/app/actions/contact.actions";
import Link from "next/link";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactProps = {
  onClose?: () => void;
};

export function Contact({ onClose }: ContactProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {
      setLoading(true);
      const res = await connectMe(data);

      if (res.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 h-screen flex justify-center items-center z-[100] bg-black/30 backdrop-blur-sm overflow-y-auto py-4">
      <section className="w-full px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 w-full max-w-2xl mx-4"
        >
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Send className="text-[#FB2056] w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FB2056] to-[#FB2056] bg-clip-text text-transparent">
                Send a Message
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-red-500 cursor-pointer hover:text-red-600 font-extrabold transition-all text-2xl sm:text-3xl"
            >
              ✕
            </button>
          </div>
          
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-700"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-700"
              >
                Subject
              </label>
              <div className="relative">
                <select
                  id="subject"
                  {...register("subject", { required: true })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 sm:mb-2 text-sm sm:text-base font-medium text-gray-700"
              >
                Your Message*
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: true })}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full cursor-pointer py-3 sm:py-4 bg-gradient-to-r from-[#FB2056] to-[#FB2056] text-white font-medium sm:font-bold rounded-xl shadow hover:shadow-lg transition-all flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}