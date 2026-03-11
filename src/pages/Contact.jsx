
import { Mail, MapPin, Phone, Send } from "lucide-react";
import contactImg from "../assets/images/contact.png";
import { useLanguage } from "../contexts/LanguageContext";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_bxn6vp7",
        "template_zbljdaf",
        form.current,
        "FwPS4VoM8FHoWx0pO"
      )
      .then(
        () => {
          toast.success("Message sent successfully! We'll get back to you soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error("Failed to send message. Please try again or contact us directly.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <ToastContainer />
      
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img src={contactImg} alt="Contact" className="w-full h-full object-cover " />
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
              Lamkichuha-1, Lamki, Kailali, Sudurpaschim Province, Nepal
            </p>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
              <Phone size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">{t.contact.info.callTitle}</h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">+977-91-540488</p>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">+977-9848420207</p>
          </div>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
              <Mail size={24} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">{t.contact.info.emailTitle}</h3>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">contact@pioneers.edu.np</p>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">admissions@pioneersacademy.edu.np</p>
          </div>

        </section>

        {/* Contact Form */}
        <section className="animate-fadeInUp">
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-6">
              {t.contact.form.title}
            </h3>

            <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.name}</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                  required
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.email}</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs sm:text-sm text-[color:var(--muted)] font-medium">{t.contact.form.message}</label>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-3 text-sm text-[color:var(--text)] focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] transition resize-none"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] px-6 py-3 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send size={18} className={sending ? "animate-pulse" : ""} />
                  {sending ? "Sending..." : t.contact.form.button}
                </button>
              </div>

            </form>
          </div>
        </section>
      </div>

      <section className="px-4 sm:px-6 pb-8 sm:pb-16 animate-fadeInUp">
        <div className="overflow-hidden rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] shadow-lg hover:shadow-xl transition duration-300">
          <div className="p-4 sm:p-6 border-b border-[color:var(--border)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--text)] mb-2">
              Our Location
            </h3>
            <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed max-w-4xl">
              Located in Lamkichuha-1, Lamki, Kailali, Sudurpaschim Province, Nepal, the campus is easy to reach from nearby communities and main transport routes.
            </p>
          </div>

          <div className="relative h-[360px] sm:h-[460px] lg:h-[560px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5827.582081480715!2d81.1524!3d28.629128000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133aa9535d4b%3A0xf8be8139437934d3!2sFounder%2C%20Pioneers%E2%80%99%20Academy%20Kailali%20Lamki!5e1!3m2!1sen!2snp!4v1772005905418!5m2!1sen!2snp"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pioneers Academy location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;