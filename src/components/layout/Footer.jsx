import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Facebook, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from "../../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--bg-alt)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[color:var(--card)] rounded-lg p-2 border border-[color:var(--border)]">
                <img className="w-14 h-14" src={logo} alt="Pioneers Academy" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--text)]">
                  Pioneers Academy
                </h3>
                <p className="text-sm text-[color:var(--muted)] font-medium">
                  Excellence in Education
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)]">
              <p className="max-w-md text-sm leading-relaxed text-[color:var(--muted)] font-medium">
                {t.footer.intro}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] transition-all duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)]">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[color:var(--text)] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/about">{t.footer.about}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/academic">{t.footer.academics}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/facilities">{t.footer.facilities}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/resources/notices">{t.footer.resources}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/rules">{t.footer.schoolrules}</Link></li>
              <li><Link className="hover:text-[color:var(--primary)] inline-block transition-colors duration-200 font-medium" to="/contact">{t.footer.contactus}</Link></li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)]">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[color:var(--text)] mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-4 text-sm text-[color:var(--muted)] font-medium">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)] md:flex-row">
          <span className="font-semibold">© {t.footer.copyright}</span>
          <span className="font-semibold">Designed by Niijo Tech.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
