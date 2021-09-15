import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import Particles_background from "../public/particles/particles-background";
const variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Particles_background />
      <div class="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
        <div class="h-full col-span-12 p-4 text-base text-center lg:col-span-3 rounded-2xl s">
          <Sidenav />
        </div>

        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="flex flex-col col-span-12 overflow-hidden  rounded-2xl lg:col-span-9  py-3 px-3"
        >
          <Navbar />

          <Component
            {...pageProps}
            className=" rounded-2xl lg:col-span-9  py-3 px-3"
          />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
