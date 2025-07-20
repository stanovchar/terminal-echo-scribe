import TerminalHeader from "@/components/TerminalHeader";
import TerminalWelcome from "@/components/TerminalWelcome";
import BlogList from "@/components/BlogList";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TerminalHeader />
      <main>
        <TerminalWelcome />
        <BlogList />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
