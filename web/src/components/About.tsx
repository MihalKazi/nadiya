import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-slate-100 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>About</SectionLabel>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Making nutrition science accessible
        </h2>
        <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
          {site.about.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({
  children,
  className = "text-teal-700",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-3 text-sm font-semibold uppercase tracking-widest ${className}`}
    >
      {children}
    </p>
  );
}
