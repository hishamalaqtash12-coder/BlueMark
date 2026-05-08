import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DeviceShowcase from "@/components/DeviceShowcase";
import ResultsPreview from "@/components/ResultsPreview";
import TeamAuthority from "@/components/TeamAuthority";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="showcase">
        <DeviceShowcase />
      </div>
      <div id="results">
        <ResultsPreview />
      </div>
      <div id="team">
        <TeamAuthority />
      </div>
      <div id="blogs">
        <BlogPreview />
      </div>
      <div id="book">
        <FinalCTA 
        headline={<>Ready to Scale <br /> Your <span className="text-blue">Business?</span></>} 
        subheadline="Next Steps"
      />
      </div>
    </>
  );
}
