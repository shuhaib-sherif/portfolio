import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";

function MyApp({ Component, pageProps }) {
  return (
    <div class="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      <div class="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl s">
        <Sidenav/>
      </div>

      <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500 py-3 px-3">
         <Navbar/>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
