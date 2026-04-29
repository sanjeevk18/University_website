import HeroSlider from "@/components/hero/HeroSlider";
import WelcomeSection from "@/components/welcome/WelcomeSection";
import NewsNotifications from "@/components/news/NewsNotifications";
import ServicesGrid from "@/components/services/ServicesGrid";
import Features from "@/components/features/Features";
import StatsSection from "@/components/stats/StatsSection";
import DirectorMessage from "@/components/director/DirectorMessage";
import QuickLinks from "@/components/quicklinks/QuickLinks";
import Testimonials from "@/components/testimonials/Testimonials";

import CoursesSection from "@/components/courses/CoursesSection";
import PhotoGallerySection from "@/components/gallery/PhotoGallerySection";
import QuickInquiryForm from "@/components/forms/QuickInquiryForm";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <WelcomeSection />
      {/* <QuickInquiryForm /> */}
      <ServicesGrid />
      <Features />
      <StatsSection />
      <CoursesSection />
      <DirectorMessage />
      <QuickLinks />
      <PhotoGallerySection />
      <Testimonials />
    </div>
  );
}