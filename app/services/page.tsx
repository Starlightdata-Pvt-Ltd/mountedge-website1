import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import { Section } from "@/components/ui/section";
import { Item, ItemTitle, ItemDescription, ItemIcon } from "@/components/ui/item";
import { Server, Code, LayoutList } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Design Systems",
      description:
        "Creation of reusable components, tokens and documentation so your product scales visually and technically.",
      icon: <LayoutList className="size-5" />,
    },
    {
      title: "Frontend Engineering",
      description:
        "Production-ready React code, performance optimizations and accessible UI built with modern tooling.",
      icon: <Code className="size-5" />,
    },
    {
      title: "Integrations & APIs",
      description:
        "We connect your product to services and build reliable API integrations.",
      icon: <Server className="size-5" />,
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        title={"Our Services"}
        description={"Practical, design-led engineering to help your product grow."}
        badge={false}
        mockup={false}
      />

      <Section>
        <div className="max-w-container mx-auto grid gap-8 sm:grid-cols-3">
          {services.map((s) => (
            <Item key={s.title} className="rounded-lg border p-6">
              <ItemIcon>
                <div className="rounded-md bg-accent/10 p-3 text-accent-foreground shadow-sm">
                  {s.icon}
                </div>
              </ItemIcon>
              <div>
                <ItemTitle>{s.title}</ItemTitle>
                <ItemDescription>{s.description}</ItemDescription>
              </div>
            </Item>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto text-center">
          <h3 className="text-2xl font-semibold">Working together</h3>
          <p className="mt-4 text-muted-foreground">
            We tailor our process to your needs — whether you need a short
            audit, a design system, or a full product build.
          </p>
        </div>
      </Section>

      <FooterSection />
    </>
  );
}
