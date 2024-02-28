import FeaturedCourses from "@/components/featuredCourses";
import HeroSection from "@/components/heroSection";
import Instructors from "@/components/instructors";
import TestimonialCards from "@/components/testimonialCards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <TestimonialCards />
            <UpcomingWebinars />
            <Instructors />
        </main>
    );
}
