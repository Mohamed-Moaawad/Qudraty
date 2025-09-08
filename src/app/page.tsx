import AppSlider from "@/components/appSlider/AppSlider";
import AppSteps from "@/components/appSteps/AppSteps";
import DownloadApp from "@/components/downloadApp/DownloadApp";
import Features from "@/components/features/Features";
import HeroSection from "@/components/heroScetion/HeroScetion";
import Testimonials from "@/components/testimonials/Testimonials";
import UsageExperience from "@/components/usageExperience/UsageExperience";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <UsageExperience />
      <AppSlider />
      <AppSteps />
      <Testimonials />
      <DownloadApp />
    </main>
  );
};
