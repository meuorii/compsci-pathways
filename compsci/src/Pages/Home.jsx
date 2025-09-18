import Hero from "../components/Hero";
import WhyChooseCompSci from "../components/WhyChooseCompSci";
import CareerOpportunities from "../components/CareerOpportunities";
import RealWorldProjects from "../components/RealWorldProjects";
import SkillsYoullMaster from "../components/SkillsYoullMaster";
import IndustryPartnerships from "../components/IndustryPartnerships";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseCompSci />
      <CareerOpportunities />
      <RealWorldProjects />
      <SkillsYoullMaster />
      <IndustryPartnerships />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
