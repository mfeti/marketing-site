import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Pill, Activity, HeartPulse, Stethoscope, Building2, Cross } from "lucide-react";

const pharmacies = [
  { id: "kenema", icon: Pill },
  { id: "red_cross", icon: Cross },
  { id: "addis_cardiac", icon: HeartPulse },
  { id: "bethzatha", icon: Activity },
  { id: "teklehaimanot", icon: Building2 },
  { id: "st_paul", icon: Stethoscope },
  { id: "black_lion", icon: Building2 },
  { id: "girum", icon: HeartPulse },
];

export default function TrustedBy() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-900 border-b border-gray-800 relative overflow-hidden">
      {/* Background Gradient Fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
          {t("trusted_by", "Trusted by leading healthcare providers")}
        </p>
      </div>

      <div className="flex overflow-hidden relative user-select-none">
        {/* Infinite Marquee Track - Duplicated for seamless loop */}
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...pharmacies, ...pharmacies, ...pharmacies].map((pharmacy, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 group cursor-default"
            >
              <pharmacy.icon
                size={24}
                className="group-hover:text-orange-500 transition-colors duration-300"
              />
              <span className="text-xl font-bold font-display tracking-tight group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                {t(`trusted_companies.${pharmacy.id}`)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
