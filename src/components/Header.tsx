import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import appIcon from "../assets/appIcon.png";
import logoSvg from "../assets/logo.svg";

{
  /* Logo */
}
<motion.div
  className="flex items-center space-x-2"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <img src={logoSvg} alt="Fitopia Icon" className="h-10" />
  <img src={logoSvg} alt="Fitopia" className="h-8" />
</motion.div>;
