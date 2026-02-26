import { MapPin, Home, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[color:var(--bg)] border-b border-[color:var(--border)] shadow-sm">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] text-[color:var(--text)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/5 transition duration-300 font-medium text-sm"
          >
            ← Back to Contact
          </button>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[color:var(--text)]">
            📍 Campus Location
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Full Map */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border-2 border-[color:var(--border)] overflow-hidden shadow-lg hover:shadow-xl transition duration-300 h-[500px] sm:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5827.582081480715!2d81.1524!3d28.629128000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a2133aa9535d4b%3A0xf8be8139437934d3!2sFounder%2C%20Pioneers%E2%80%99%20Academy%20Kailali%20Lamki!5e1!3m2!1sen!2snp!4v1772005905418!5m2!1sen!2snp"
              className="w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Info Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          {/* Address Card */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-[color:var(--primary)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  Address
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  Balaju, Kathmandu Valley
                  <br />
                  Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-[color:var(--primary)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  Phone
                </h3>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] cursor-pointer hover:text-[color:var(--primary)] transition">
                    📞 +977 01-XXXXXXX
                  </p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] cursor-pointer hover:text-[color:var(--primary)] transition">
                    📱 +977 98-XXXXXXX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-[color:var(--primary)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  Email
                </h3>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] cursor-pointer hover:text-[color:var(--primary)] transition break-all">
                    info@pioneersacademy.edu.np
                  </p>
                  <p className="text-xs sm:text-sm text-[color:var(--muted)] cursor-pointer hover:text-[color:var(--primary)] transition break-all">
                    admissions@pioneersacademy.edu.np
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-lg hover:shadow-xl transition duration-300 hover:border-[color:var(--primary)]">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Clock size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  Office Hours
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-[color:var(--muted)]">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300 text-sm">
              📞 Call Direction
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="w-full px-6 py-3 rounded-lg border-2 border-[color:var(--primary)] text-[color:var(--text)] font-semibold hover:bg-[color:var(--primary)] hover:text-white transition duration-300 text-sm"
            >
              ✉️ Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Routes Information */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-6 flex items-center gap-2">
            🚗 How to Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "By Public Transport",
                description: "Easy access via bus routes. Our location is near major transit points with frequent service.",
                icon: "🚌"
              },
              {
                title: "School Transport",
                description: "Safe and reliable school bus service available from multiple pickup points across the city.",
                icon: "🚌"
              },
              {
                title: "Private Vehicle",
                description: "Ample parking available. Located on easily accessible road with straight access.",
                icon: "🚗"
              },
              {
                title: "Walking/Cycling",
                description: "Safe pedestrian pathways and cycling routes make self-commute options viable.",
                icon: "🚴"
              }
            ].map((route, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[color:var(--bg-alt)] border border-[color:var(--border)] hover:border-[color:var(--primary)] hover:shadow-md transition duration-300">
                <div className="text-2xl mb-2">{route.icon}</div>
                <h4 className="text-base font-bold text-[color:var(--text)] mb-2">
                  {route.title}
                </h4>
                <p className="text-xs sm:text-sm text-[color:var(--muted)]">
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
