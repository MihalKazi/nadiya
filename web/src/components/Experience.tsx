import { site } from "@/data/site";
import { SectionLabel } from "@/components/About";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Background & roles
        </h2>
        <ul className="mt-10 divide-y divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {site.experience.map((item) => (
            <li
              key={item.org}
              className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="font-medium text-slate-900">{item.org}</span>
              <span className="text-slate-600 sm:text-right">{item.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
