import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="KCC" className="h-14 w-auto rounded bg-brand-yellow p-1" width={140} height={56} />
          <p className="text-sm text-background/70">
            Al-Kharafi Construction Co. — Engineering & construction excellence in Kuwait and beyond.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">Company</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li><Link to="/about" className="hover:text-brand-yellow">About KCC</Link></li>
            <li><Link to="/services" className="hover:text-brand-yellow">Services</Link></li>
            <li><Link to="/projects" className="hover:text-brand-yellow">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">Sectors</h4>
          <ul className="space-y-2 text-sm text-background/80">
            <li>Industrial Complexes</li>
            <li>High-Rise Buildings</li>
            <li>Hospitals & Healthcare</li>
            <li>Infrastructure</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-yellow">Contact</h4>
          <address className="space-y-2 text-sm not-italic text-background/80">
            <p>State of Kuwait</p>
            <p>info@kcc-kuwait.com</p>
            <p>+965 0000 0000</p>
          </address>
        </div>
      </div>
      <div className="border-t border-background/10 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Al-Kharafi Construction Co. All rights reserved.
      </div>
    </footer>
  );
}
