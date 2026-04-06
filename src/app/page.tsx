import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CoursesSection from "@/components/CoursesSection";
import Roadmap from "@/components/Roadmap";
import Tools from "@/components/Tools";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import Mentors from "@/components/Mentors";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <CoursesSection />
        <Roadmap />
        <Tools />
        <WhoShouldJoin />
        <Mentors />
        <Register />
      </main>
      <Footer />
    </>
  );
}
