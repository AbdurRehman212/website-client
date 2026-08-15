import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { values } from "@/content/site";

export default function ValuesGrid() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="What Guides Us" title="Our Values" align="center" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center gap-2 text-center">
              <span className="h-10 w-10 rounded-full border border-gold/50" aria-hidden="true" />
              <h3 className="font-display text-lg text-navy">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
