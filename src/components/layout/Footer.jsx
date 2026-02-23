import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Facebook, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(31,78,121,0.08),rgba(242,92,92,0.06))]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img className="w-14" src={logo} alt="Pioneers Academy" />
              {/* <div>
                <h3 className="text-xl font-semibold text-[color:var(--text)]">
                  Pioneers Academy Kailali
                </h3>
                <p className="text-sm text-[color:var(--muted)]">
                  Shaping confident, compassionate learners.
                </p>
              </div> */}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
              We build strong foundations in academics, character, and creativity so
              every learner can thrive in a changing world.
            </p>

             <div className="mt-5 flex items-center gap-3">
              <Facebook className="h-5 w-5 text-[color:var(--primary)]" />
              <Instagram className="h-5 w-5 text-[color:var(--primary)]" />
              <Youtube className="h-5 w-5 text-[color:var(--primary)]" />
              </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--text)]">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
              <li><Link className="hover:text-[color:var(--primary)]" to="/about">{t.footer.about}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)]" to="/academic">{t.footer.academics}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)]" to="/facilities">{t.footer.facilities ||  'Facilities'}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)]" to="/resources">{t.footer.resources}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[color:var(--text)]">
              {t.footer.contactInfo}
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
            </ul>
            {/* <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--primary)]">F</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--primary)]">I</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--primary)]">Y</span>
            </div> */}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--border)] pt-6 text-xs text-[color:var(--muted)] md:flex-row">
          <span>{t.footer.copyright}</span>
          <span>Designed with Niijo Tech.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
