import { site } from "@/data/site";
import { SectionLabel } from "@/components/About";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-gradient-to-br from-slate-950 to-teal-950 px-5 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionLabel className="text-teal-300">Contact</SectionLabel>
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 max-w-xl text-lg text-slate-300">
          Open to collaborations in nutrition communication, public health
          writing, and community health projects.
        </p>

        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm font-medium text-teal-300">Email</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${site.email}`}
                className="break-all text-lg font-medium hover:text-teal-200"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm font-medium text-teal-300">LinkedIn</dt>
            <dd className="mt-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-teal-200"
              >
                {site.name}
              </a>
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm font-medium text-teal-300">Phone</dt>
            <dd className="mt-2 text-lg font-medium">{site.phone}</dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <dt className="text-sm font-medium text-teal-300">Location</dt>
            <dd className="mt-2 text-lg font-medium">{site.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="hover:text-teal-400 transition-colors"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
