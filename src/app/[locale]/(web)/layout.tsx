import Navbar from "@/components/sections/Navigations/Navbar";
import { poppins, romain, suisse } from "@/lib/fonts";
import Footer from "@/components/sections/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`w-full h-full bg-[#004170] ${suisse.variable} ${poppins.variable} ${romain.variable} relative font-poppins `}
    >
      <div className="">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
