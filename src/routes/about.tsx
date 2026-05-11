import { CheckCircle2 } from "lucide-react";
import { useTitle } from "@/lib/useTitle";

export default function AboutPage() {
  useTitle("About KCC | Al-Kharafi Construction Co.", "Learn about Al-Kharafi Construction Co., a subsidiary of the Al Kharafi Group.");
  const points = [
    "Subsidiary of the renowned Al Kharafi Group",
    "Engineering, procurement and construction services",
    "Industrial, commercial, healthcare and infrastructure expertise",
    "Annual turnover of approximately KD 100 million",
    "Trusted by leading global contractors and consultants",
    "Highest commitment to quality and customer satisfaction",
  ];
  return (
    <>
      <section className="bg-brand-black py-24 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">About us</span>
          <h1 className="mt-3 max-w-4xl text-balance font-display text-5xl font-bold md:text-7xl">
            Construction excellence rooted in <span className="text-brand-yellow">heritage</span>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>Al-Kharafi Construction Co. (KCC) is a subsidiary of the Al Kharafi Group — a rising construction contractor active in growing markets, providing engineering and construction services on projects varying in size and complexity for both public and private customers.</p>
            <p>Based in the State of Kuwait, KCC provides engineering, construction and procurement services for industrial, offices, commercial complexes, high-rise buildings, hospitals and infrastructure projects.</p>
            <p>KCC realizes that quality service is paramount to its success and the satisfaction of its customers. We are committed to providing services with the highest regard for quality — meeting and exceeding customer expectations.</p>
            <p>With its commitment to excellence, KCC has become one of the leading construction companies in Kuwait — capable of handling any type of civil engineering or construction project with the experience of working alongside the world's foremost contractors and consultants.</p>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl bg-gradient-accent p-8 text-brand-black shadow-elegant">
              <div className="font-display text-6xl font-bold">KD 100M</div>
              <p className="mt-2 font-semibold">Approximate annual turnover</p>
            </div>
            <ul className="space-y-3 rounded-2xl border border-border bg-card p-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-yellow-deep" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-xl border-l-4 border-brand-yellow-deep bg-card p-8 shadow-elegant">
            <h3 className="font-display text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-muted-foreground">To ensure our quality of service meets the full satisfaction and expectations of our customers and, where possible, exceeds them — by maintaining the highest level of technical capability necessary for our construction activities.</p>
          </div>
          <div className="rounded-xl border-l-4 border-brand-black bg-card p-8 shadow-elegant">
            <h3 className="font-display text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-muted-foreground">To be the leading construction contractor in Kuwait and the region — synonymous with quality, integrity and engineering ingenuity across every sector we serve.</p>
          </div>
        </div>
      </section>
    </>
  );
}
