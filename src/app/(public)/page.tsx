import Category from "@/components/home/Category";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import Journey from "@/components/home/Journey";
import Newsletter from "@/components/home/Newsletter";
import Stats from "@/components/home/Stats";
import Testimonial from "@/components/home/Testimonial";
import WhyChoose from "@/components/home/whyChoose";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Category />
      <FeaturedProperties />
      <WhyChoose />
      <Stats />
      <Journey />
      <Testimonial />
      <Newsletter />
    </div>
  );
}
