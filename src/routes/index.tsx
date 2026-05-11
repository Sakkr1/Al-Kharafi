import { Link } from "react-router-dom";
import { ArrowRight, Building2, HardHat, ShieldCheck, Award } from "lucide-react";
import hero from "@/assets/hero.jpg";
import tower from "@/assets/project-tower.jpg";
import hospital from "@/assets/project-hospital.jpg";
import industrial from "@/assets/project-industrial.jpg";
import { useTitle } from "@/lib/useTitle";

export default function HomePage() {
  useTitle("Al-Kharafi Construction Co. | Engineering & Construction in Kuwait", "KCC delivers engineering, procurement and construction services across Kuwait.");
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Construction site" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24">
          <span className="mb-5 inline-block w-fit rounded-full bg-brand-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-black">
            A subsidiary of the Al Kharafi Group
          </span>
          <h1 className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.05] text-background md:text-7xl lg:text-8xl">
            Building Kuwait's <span className="text-brand-yellow">tomorrow</span>, today.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/85 md:text-xl">
            Engineering, procurement and construction services for industrial complexes, high-rise buildings, hospitals and major infrastructure.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-7 py-3.5 font-semibold text-brand-black shadow-yellow transition-transform hover:scale-105">
              Our Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-background/40 px-7 py-3.5 font-semibold text-background backdrop-blur transition-colors hover:bg-background/10">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-brand-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-background/10 md:grid-cols-4">
          {[
            { v: "KD 100M", l: "Annual turnover" },
            { v: "40+", l: "Years of expertise" },
            { v: "200+", l: "Projects delivered" },
            { v: "100%", l: "Quality commitment" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-10 text-center">
              <div className="font-display text-3xl font-bold text-brand-yellow md:text-5xl">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-background/70 md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow-deep">Why KCC</span>
          <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">A commitment to excellence in every detail.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            KCC has become one of Kuwait's leading construction companies — capable of handling any civil engineering or construction project with the experience of working alongside the world's foremost contractors and consultants.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Building2, t: "Full EPC", d: "Engineering, procurement and construction under one roof." },
            { Icon: ShieldCheck, t: "Quality First", d: "Highest quality standards across every phase of delivery." },
            { Icon: HardHat, t: "Technical Depth", d: "High-level technical capability for complex builds." },
            { Icon: Award, t: "Trusted Group", d: "Backed by the strength of the Al Kharafi Group." },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="group rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand-yellow-deep hover:shadow-elegant">
              <div className="mb-5 inline-flex rounded-lg bg-brand-yellow p-3 text-brand-black">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow-deep">Portfolio</span>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">Featured sectors</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 font-semibold text-brand-black hover:text-brand-yellow-deep">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: tower, t: "High-Rise Buildings", d: "Iconic towers and modern commercial complexes." },
              { img: hospital, t: "Healthcare Facilities", d: "World-class hospitals and medical centers." },
              { img: industrial, t: "Industrial Complexes", d: "Heavy industry, energy and process facilities." },
            ].map((p) => (
              <article key={p.t} className="group overflow-hidden rounded-xl bg-card shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-accent">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-20 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-2xl text-balance text-4xl font-bold text-brand-black md:text-5xl">Ready to build your next landmark?</h2>
            <p className="mt-3 max-w-xl text-brand-black/80">Talk to our team about your engineering and construction needs.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-black px-8 py-4 font-semibold text-brand-yellow shadow-elegant transition-transform hover:scale-105">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
