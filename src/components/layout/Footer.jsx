import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useLanguage } from "../../contexts/LanguageContext";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.footer.about, to: "/about" },
    { label: t.footer.academics, to: "/academic" },
    { label: t.footer.facilities, to: "/facilities" },
    { label: t.footer.resources, to: "/resources/notices" },
    { label: t.footer.schoolrules, to: "/rules" },
    { label: t.footer.contactus, to: "/contact" },
  ];

  const socialLinks = [
    { icon: MdFacebook, label: "Facebook" },
    { icon: IoLogoInstagram, label: "Instagram" },
    { icon: FaYoutube, label: "YouTube" },
  ];

  return (
    <footer className="mt-16 border-t border-slate-200 bg-linear-to-b from-white via-slate-50 to-sky-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-6 lg:p-8">
          
          {/* Section 1 */}
          <section className="space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                className="h-14 w-14 object-contain"
                src={logo}
                alt={t.footer.title}
              />
              <div>
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                  {t.footer.title}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {t.footer.subtitle}
                </p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              {t.footer.intro}
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    aria-label={item.label}
                    className="inline-flex rounded-md h-8 w-8 items-center justify-center bg-white text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:bg-blue-900 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-50 p-6 text-center sm:text-left">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-5 space-y-3 text-sm font-medium text-slate-600">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    className="transition-colors duration-200 hover:text-blue-900 hover:underline"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-50 p-6 text-center sm:text-left">
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
              {t.footer.contactInfo}
            </h4>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-black">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
            </ul>
          </section>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 mx-4 sm:mx-10 flex flex-col gap-3 text-sm text-black sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium">{t.footer.copyright}</span>
          <span className="font-medium">{t.footer.designedBy}</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;