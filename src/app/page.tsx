import FeatureSection from "@/components/featureSection/FeatureSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Instructors from "@/components/instructors/Instructors";
import TestimonialCard from "@/components/testimonialCard/TestimonialCard";
import UpcomingWebinar from "@/components/upcomingWebinar/UpcomingWebinar";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero/>
      <FeatureSection/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingWebinar/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
