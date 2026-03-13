import { MapPin, Home, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Map component for displaying the school's physical location and contact details
 */
const Map = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  /**
   * Defines various routes and transport options for reaching the campus
   */
  const transportRoutes = [
    {
      title: t.map.publicTransport,
      description: t.map.publicTransportDetail,
      icon: "🚌"
    },
    {
      title: t.map.schoolTransport,
      description: t.map.schoolTransportDetail,
      icon: "🚌"
    },
    {
      title: t.map.privateVehicle,
      description: t.map.privateVehicleDetail,
      icon: "🚗"
    },
    {
      title: t.map.walkingCycling,
      description: t.map.walkingCyclingDetail,
      icon: "🚴"
    }
  ];

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors">
      {/* Functional Header: Search and Persistent Navigation */}
      <div className="sticky top-0 z-40 bg-(--bg) border-b border-(--border) shadow-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-(--card) border border-(--border) text-(--text) hover:border-(--primary) hover:bg-(--primary)/5 transition duration-300 font-medium text-sm"
          >
            ← {t.map.backToContact}
          </button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-(--text)">
            📍 {t.map.hero}
          </h1>
        </div>
      </div>

      {/* Main Geographic Display and Data Pane */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Geographic Information: Interactive Map Embed */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border-2 border-(--border) overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-[500px] sm:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5827.582081480715!2d81.1524!3d28.629128000000005!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133aa9535d4b%3A0xf8be8139437934d3!2sFounder%2C%20Pioneers%E2%80%99%20Academy%20Kailali%20Lamki!5e1!3m2!1sen!2snp!4v1772005905418!5m2!1sen!2snp"
              className="w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Information Cluster: Contact and Logistics Cards */}
        <div className="space-y-4 sm:space-y-6">
          {/* Physical Location Card */}
          <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-(--primary)">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-(--primary) to-(--primary-strong) flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {t.map.address}
                </h3>
                <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                  {t.map.addressDetail}
                </p>
              </div>
            </div>
          </div>

          {/* Voice Communication Card */}
          <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-(--primary)">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-500 to-green-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {t.map.phone}
                </h3>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-(--muted) cursor-pointer hover:text-(--primary) transition">
                    📞 +977 01-XXXXXXX
                  </p>
                  <p className="text-xs sm:text-sm text-(--muted) cursor-pointer hover:text-(--primary) transition">
                    📱 +977 98-XXXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Correspondence Card */}
          <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-(--primary)">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {t.map.email}
                </h3>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-(--muted) cursor-pointer hover:text-(--primary) transition break-all">
                    info@pioneersacademy.edu.np
                  </p>
                  <p className="text-xs sm:text-sm text-(--muted) cursor-pointer hover:text-(--primary) transition break-all">
                    admissions@pioneersacademy.edu.np
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Hours Card */}
          <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-(--primary)">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <Clock size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {t.map.hours}
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-(--muted)">
                  <p>{t.map.mondayFriday}</p>
                  <p>{t.map.saturday}</p>
                  <p>{t.map.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Outreach Container */}
          <div className="space-y-3 pt-2">
            <button className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-(--primary) to-(--primary-strong) text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 text-sm">
              📞 {t.map.callDirection}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="w-full px-6 py-3 rounded-lg border-2 border-(--primary) text-(--text) font-semibold hover:bg-(--primary) hover:text-white transition duration-300 text-sm"
            >
              ✉️ {t.map.sendMessage}
            </button>
          </div>
        </div>
      </div>

      {/* Auxiliary Context: Contextual Accessibility Info */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-6 flex items-center gap-2">
            🚗 {t.map.reachUs}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transportRoutes.map((route, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-(--bg-alt) border border-(--border) hover:border-(--primary) hover:shadow-md transition duration-300">
                <div className="text-2xl mb-2">{route.icon}</div>
                <h4 className="text-base font-bold text-(--text) mb-2">
                  {route.title}
                </h4>
                <p className="text-xs sm:text-sm text-(--muted)">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
