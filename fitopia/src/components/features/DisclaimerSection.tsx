import React from "react";
import { motion } from "framer-motion";

const DisclaimerSection: React.FC = () => {
  return (
    <motion.div
      className="mt-24 text-center text-sm text-gray-500 max-w-2xl mx-auto px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-medium text-orange-500 mb-4">*Note</p>
      <p className="leading-relaxed">
        The current demo of Fitopia only supports push-up and iPhone platform.
        While using the application, please ensure adequate space around you and
        maintain awareness of your surroundings. We strongly recommend
        consulting your healthcare provider before starting any exercise
        program, particularly if you have pre-existing medical conditions.
        Fitopia shall not be held liable for any injuries, accidents, or health
        issues that may arise from the use of this application.
      </p>
    </motion.div>
  );
};

export default DisclaimerSection;
