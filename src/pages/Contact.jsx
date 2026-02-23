import { Mail, MapPin, Phone, Send } from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img src={homepage} alt="Contact" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            {t.contact.hero}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-12">
        {/* Intro */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </section>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 animate-fadeInUp">
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
              <MapPin size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">{t.contact.info.visitTitle}</h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">
              Balaju, Kathmandu Valley, Nepal
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
              <Phone size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">{t.contact.info.callTitle}</h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">+977 01-XXXXXXX</p>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">+977 98-XXXXXXX</p>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
              <Mail size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">{t.contact.info.emailTitle}</h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">info@pioneersacademy.edu.np</p>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">admissions@pioneersacademy.edu.np</p>
          </div>
        </section>

        {/* Form + Map */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-fadeInUp">
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-slideInLeft">
            <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-6">
              {t.contact.form.title}
            </h3>
            <form className="space-y-5">
              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.name}</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.email}</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.subject}</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                />
              </div>
              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.message}</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] px-6 py-3 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <Send size={18} />
                {t.contact.form.button}
              </button>
            </form>
          </div>

          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-slideInRight">
            <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-4">{t.contact.map.title}</h3>
            <div className="h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border-2 border-[color:var(--border)] bg-[color:var(--card)] shadow-md">
             

             <div className="w-full h-full flex items-center justify-center text-[color:var(--muted)]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.866398100724!2d85.35940557447294!3d27.721411024872793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b005dbb5809%3A0x75fdd30a5b74bd0f!2sBoudha%20Stupa!5e0!3m2!1sen!2snp!4v1771745251355!5m2!1sen!2snp"
    width="800"
    height="600"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-md"
  ></iframe>
</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
