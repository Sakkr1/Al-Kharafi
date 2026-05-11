import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useTitle } from "@/lib/useTitle";

export default function ContactPage() {
  useTitle("Contact | Al-Kharafi Construction Co.", "Get in touch with KCC for your construction project.");
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-brand-black py-24 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">Contact</span>
          <h1 className="mt-3 max-w-4xl text-balance font-display text-5xl font-bold md:text-7xl">
            Let's build something <span className="text-brand-yellow">remarkable</span>.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Get in touch</h2>
            <p className="text-muted-foreground">Whether you're planning a high-rise, an industrial complex or major infrastructure — our team is ready to discuss your project.</p>
            <div className="space-y-5 pt-4">
              {[
                { Icon: MapPin, t: "Headquarters", d: "State of Kuwait" },
                { Icon: Mail, t: "Email", d: "info@kcc-kuwait.com" },
                { Icon: Phone, t: "Phone", d: "+965 0000 0000" },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="rounded-lg bg-brand-yellow p-3 text-brand-black"><Icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t}</div>
                    <div className="text-lg font-medium">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
            </div>
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="mb-2 block text-sm font-semibold">Project details</label>
              <textarea required rows={5} className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:border-brand-yellow-deep" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-black px-6 py-3.5 font-semibold text-brand-yellow transition-transform hover:scale-[1.02]">
              {sent ? "Thanks — we'll be in touch" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold">{label}</label>
      <input id={name} name={name} type={type} required className="w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:border-brand-yellow-deep" />
    </div>
  );
}
