import { Building, Factory, Hospital, Hammer, Briefcase, TrafficCone } from "lucide-react";
import { useTitle } from "@/lib/useTitle";

const services = [
  { Icon: Factory, t: "Industrial Complexes", d: "Design and construction of complete industrial facilities — from process plants to manufacturing campuses." },
  { Icon: Briefcase, t: "Offices & Commercial", d: "Modern offices, commercial centers and mixed-use developments delivered to international standards." },
  { Icon: Building, t: "High-Rise Buildings", d: "Iconic towers and skyscrapers built with structural integrity and architectural ambition." },
  { Icon: Hospital, t: "Hospitals & Healthcare", d: "Specialised construction of medical facilities meeting strict regulatory and operational requirements." },
  { Icon: TrafficCone, t: "Infrastructure", d: "Roads, bridges, utilities and large-scale civil works supporting the growth of Kuwait." },
  { Icon: Hammer, t: "Procurement & EPC", d: "Full Engineering, Procurement and Construction packages — single point of accountability." },
];

export default function ServicesPage() {
  useTitle("Services | Al-Kharafi Construction Co.", "Engineering, procurement and construction services across all sectors.");
  return (
    <>
      <section className="bg-brand-black py-24 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">What we do</span>
          <h1 className="mt-3 max-w-4xl text-balance font-display text-5xl font-bold md:text-7xl">
            Engineering & construction <span className="text-brand-yellow">services</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/80">Comprehensive solutions for projects of every scale and complexity — public or private.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, t, d }) => (
            <div key={t} className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-yellow opacity-0 transition-opacity group-hover:opacity-20" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-lg bg-brand-yellow p-3 text-brand-black">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-accent py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-black md:text-4xl">Every project — built to the highest quality standard.</h2>
          <p className="mt-4 text-brand-black/80">From feasibility to handover, KCC delivers projects that stand the test of time.</p>
        </div>
      </section>
    </>
  );
}
