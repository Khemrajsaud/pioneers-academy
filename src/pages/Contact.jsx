import { Mail, MapPin, Phone, Send } from "lucide-react";
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
          toast.success(t.contact.form.success);
          e.target.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          toast.error(t.contact.form.error);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />

      {/* HEADER */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Contact Us
        </h1>
      </div>

      {/* INTRO */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          {t.contact.intro}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {t.contact.subtitle}
        </p>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-6">

            {/* ADDRESS */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900">
                    {t.contact.info.visitTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t.contact.info.visitAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900">
                    {t.contact.info.callTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t.contact.info.callPhone}
                  </p>
                  <p className="text-gray-600 text-sm">
                    +977-9848420207
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="bg-blue-900 text-white p-3 rounded-full">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900">
                    {t.contact.info.emailTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t.contact.info.emailAddress}
                  </p>
                  <p className="text-gray-600 text-sm">
                    admissions@pioneersacademy.edu.np
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6">
              {t.contact.form.title}
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.placeholderName}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.placeholderEmail}
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder={t.contact.form.placeholderSubject}
                className="md:col-span-2 border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none"
                required
              />

              {/* MESSAGE */}
              <textarea
                rows="5"
                name="message"
                placeholder={t.contact.form.placeholderMessage}
                className="md:col-span-2 border p-3 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none resize-none"
                required
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className="md:col-span-2 flex items-center justify-center gap-2 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
              >
                <Send size={18} />
                {sending ? t.contact.form.sending : t.contact.form.button}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* MAP */}
      <div className="px-4 sm:px-6 pb-12">
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5827.582081480715!2d81.1524!3d28.629128000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133aa9535d4b%3A0xf8be8139437934d3!2sFounder%2C%20Pioneers%E2%80%99%20Academy%20Kailali%20Lamki!5e1!3m2!1sen!2snp!4v1772005905418!5m2!1sen!2snp"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] border-0"
            loading="lazy"
            title="Pioneers Academy location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;