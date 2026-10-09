import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EmployerStrip from "@/components/sections/EmployerStrip";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/Hero";
import NumbersBand from "@/components/sections/NumbersBand";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import WorkSection from "@/components/sections/WorkSection";
import WritingSection from "@/components/sections/WritingSection";
import { experience, profile, site } from "@/data/portfolio";

export default function HomePage() {
  // Structured data so search engines understand who this page is about.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: site.url,
    email: `mailto:${profile.email}`,
    jobTitle: "Product Leader",
    description: site.description,
    address: { "@type": "PostalAddress", addressLocality: "Cambridge", addressCountry: "GB" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Buckingham" },
      { "@type": "CollegeOrUniversity", name: "Osmania University" },
    ],
    worksFor: { "@type": "Organization", name: experience[0].company },
    sameAs: [profile.linkedin, profile.github, profile.orcid],
    knowsAbout: ["Product management", "Fintech", "Mental health technology", "EdTech", "Product-led growth"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <EmployerStrip />
      <NumbersBand />
      <WorkSection />
      <ExperienceSection />
      <WritingSection />
      <ProjectsSection />
      <RecognitionSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
