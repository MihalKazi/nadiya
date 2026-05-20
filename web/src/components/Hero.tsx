import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-300/90">
          Portfolio
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {site.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
          Evidence-based nutrition writing, public health advocacy, and
          community-focused health communication.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#writing"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-400"
          >
            Read my writing
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
