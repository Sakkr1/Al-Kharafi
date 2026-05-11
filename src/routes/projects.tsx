import tower from "@/assets/project-tower.jpg";
import hospital from "@/assets/project-hospital.jpg";
import industrial from "@/assets/project-industrial.jpg";
import infra from "@/assets/project-infra.jpg";
import { useTitle } from "@/lib/useTitle";

const projects = [
  { img: tower, cat: "High-Rise", t: "Commercial Tower Development", d: "A 50-storey landmark commercial tower in Kuwait City — premium offices and retail." },
  { img: hospital, cat: "Healthcare", t: "Specialty Medical Center", d: "State-of-the-art hospital facility with advanced clinical infrastructure." },
  { img: industrial, cat: "Industrial", t: "Process Plant Expansion", d: "Major expansion of a heavy industrial complex including pipework and structures." },
  { img: infra, cat: "Infrastructure", t: "Highway Interchange", d: "Multi-level highway interchange and bridges easing urban connectivity." },
  { img: tower, cat: "Mixed-Use", t: "Mixed-Use Complex", d: "A mixed-use development combining residences, retail and offices." },
  { img: hospital, cat: "Public", t: "Government Office Complex", d: "Modern administrative complex for public sector use." },
];

export default function ProjectsPage() {
  useTitle("Projects | Al-Kharafi Construction Co.", "Selected projects delivered by KCC across Kuwait.");
  return (
    <>
      <section className="bg-brand-black py-24 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">Portfolio</span>
          <h1 className="mt-3 max-w-4xl text-balance font-display text-5xl font-bold md:text-7xl">
            Landmark <span className="text-brand-yellow">projects</span> across Kuwait.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-xl bg-card shadow-elegant transition-transform hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black">{p.cat}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
