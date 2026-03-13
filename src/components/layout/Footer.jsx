import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Facebook, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from "../../contexts/LanguageContext";

/**
 * Global Footer component containing branding, quick links, and contact information
 */
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-(--border) bg-(--bg-alt) transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Branding and Social Outreach Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2">
                <img className="w-14 h-14 object-contain" src={logo} alt={t.footer.title} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-(--text) tracking-tight">
                  {t.footer.title}
                </h3>
                <p className="text-sm text-(--muted) font-medium">
                  {t.footer.subtitle}
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="max-w-md text-sm leading-relaxed text-(--text) font-medium opacity-90">
                {t.footer.intro}
              </p>
            </div>

            {/* Social Engagement Links */}
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-(--border) bg-(--card) text-(--text) hover:bg-(--primary) hover:text-white hover:border-(--primary) transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-(--border) bg-(--card) text-(--text) hover:bg-(--primary) hover:text-white hover:border-(--primary) transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-(--border) bg-(--card) text-(--text) hover:bg-(--primary) hover:text-white hover:border-(--primary) transition-all duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Recovery: Essential Site Mapping */}
          <div className="p-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-(--text) mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm text-(--text)">
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/about">{t.footer.about}</Link></li>
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/academic">{t.footer.academics}</Link></li>
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/facilities">{t.footer.facilities}</Link></li>
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/resources/notices">{t.footer.resources}</Link></li>
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/rules">{t.footer.schoolrules}</Link></li>
              <li><Link className="hover:text-(--primary) inline-block transition-colors duration-200 font-medium" to="/contact">{t.footer.contactus}</Link></li>
            </ul>
          </div>

          {/* Logistics Summary: Direct Communication Channels */}
          <div className="p-6">
            <h4 className="text-lg font-bold uppercase tracking-widest text-(--text) mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-4 text-sm text-(--text) font-medium opacity-90">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
            </ul>
          </div>
        </div>

        {/* Legal and Attribution Footer */}
        <div className="mt-8 flex flex-col items-center justify-between text-(--text) gap-4 border-t border-(--border) pt-8 text-sm md:flex-row">
          <span className="font-semibold">{t.footer.copyright}</span>
          <span className="font-semibold opacity-70">{t.footer.designedBy}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
