"use client"

import { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting the form
    
    const formDataToSend = new FormData();
    formDataToSend.append("senderEmail", formData.senderEmail);
    formDataToSend.append("message", formData.message);
  
    try {
      const { data } = await sendEmail(formDataToSend);
      toast.success("Email sent successfully!");
      setFormData({
        senderEmail: "",
        message: "",
      });
    } catch (error: unknown) {
      if (typeof error === 'string') {
          toast.error(error);
      } else {
          // Handle other error types or log them
          toast.error("An error occurred while sending the email.");
      }
  } finally {
      setLoading(false); // Set loading back to false after sending the email
  }
  
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        For direct contact reach me at{" "}
        <span className="font-semibold text-[#016BF8]">
          +60165820616 (WhatsApp available).
        </span>
      </p>
      <h1>OR</h1>
      <p className="text-gray-700 dark:text-white/80">
        For communication, email me at{" "}
        <a
          className="font-semibold text-[#016BF8] hover:text-[#016cf8e6]"
          href="mailto:Suren.boyilla@gmail.com"
        >
          Suren.boyilla@gmail.com
        </a>{" "}
        or use this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          value={formData.senderEmail}
          onChange={handleInputChange}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          maxLength={5000}
          placeholder="Your message"
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
}