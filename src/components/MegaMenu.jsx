// components/MegaMenu.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiOutlineLightningBolt, HiOutlineBriefcase, HiOutlineChartBar, HiOutlineCog } from "react-icons/hi";
import {FaTint} from "react-icons/fa"
import { cn } from "../utils/cn";

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const menuItems = {
    solar: {
      title: "Solar Energy",
      icon: HiOutlineLightningBolt,
      color: "text-gw-leaf",
      sections: [
        {
          title: "Phase 1: Diagnostic",
          links: [
            { name: "Energy Audits", path: "/services/energy-audits", specs: "ISO 50001" },
            { name: "Load Profiling", path: "/services/load-profiling", specs: "3-Phase Analysis" }
          ]
        },
        {
          title: "Phase 2: Execution",
          links: [
            { name: "C&I On-Grid Solutions", path: "/services/on-grid", specs: "Up to 10MW" },
            { name: "Off-Grid + Storage", path: "/services/off-grid", specs: "BESS Integration" },
            { name: "Hybrid Systems", path: "/services/hybrid", specs: "Grid + Solar + Storage" }
          ]
        },
        {
          title: "Phase 3: Specialized",
          links: [
            { name: "Solar Desalination", path: "/services/solar-desalination", specs: "Energy-Water Nexus" },
            { name: "Solar Pumping", path: "/services/solar-pumping", specs: "Up to 500m Head" },
            { name: "Solar Thermal Cooking", path: "/services/solar-cooking", specs: "Industrial Scale" }
          ]
        },
        {
          title: "Phase 4: Sustainment",
          links: [
            { name: "Preventive O&M", path: "/services/om", specs: "24/7 Monitoring" },
            { name: "Performance Optimization", path: "/services/optimization", specs: "AI-Driven" }
          ]
        }
      ]
    },
    water: {
      title: "Water Solutions",
      icon: FaTint,
      color: "text-gw-sky",
      sections: [
        {
          title: "Groundwater Acquisition",
          links: [
            { name: "Geophysical Surveys", path: "/services/geophysical-surveys", specs: "VES / Resistivity" },
            { name: "Borehole Drilling", path: "/services/borehole-drilling", specs: "Up to 300m Depth" },
            { name: "Borehole Flushing", path: "/services/borehole-flushing", specs: "Air Lift / Compressor" }
          ]
        },
        {
          title: "Pumping Systems",
          links: [
            { name: "Surface Pumps", path: "/services/surface-pumps", specs: "Centrifugal / Multistage" },
            { name: "Submersible Pumps", path: "/services/submersible-pumps", specs: "Up to 500HP" },
            { name: "Pump Sizing Consultation", path: "/services/pump-sizing", specs: "Engineering Grade" }
          ]
        },
        {
          title: "Advanced Treatment",
          links: [
            { name: "Reverse Osmosis", path: "/services/ro-systems", specs: "Up to 1000m³/day" },
            { name: "Ultrafiltration", path: "/services/ultrafiltration", specs: "0.01 Micron" },
            { name: "Wastewater Treatment", path: "/services/wastewater", specs: "Zero Liquid Discharge" }
          ]
        }
      ]
    },
    consultation: {
      title: "Tech Consultation",
      icon: HiOutlineBriefcase,
      color: "text-gw-sun",
      sections: [
        {
          title: "Renewable Frontiers",
          links: [
            { name: "Geothermal Exploration", path: "/services/geothermal", specs: "Resource Assessment" },
            { name: "Wind Resource Assessment", path: "/services/wind-assessment", specs: "LiDAR / Met Mast" }
          ]
        },
        {
          title: "Nuclear Advisory",
          links: [
            { name: "Peaceful Nuclear Feasibility", path: "/services/nuclear-feasibility", specs: "SMR Technology" },
            { name: "Regulatory Framework", path: "/services/nuclear-regulatory", specs: "IAEA Standards" }
          ]
        },
        {
          title: "Infrastructure",
          links: [
            { name: "EPC Management", path: "/services/epc", specs: "Turnkey Solutions" },
            { name: "Technical Due Diligence", path: "/services/due-diligence", specs: "Third-Party Review" }
          ]
        }
      ]
    }
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      {/* Menu Tabs */}
      <div className="flex gap-6">
        {Object.entries(menuItems).map(([key, item]) => (
          <button
            key={key}
            onMouseEnter={() => handleMouseEnter(key)}
            className={cn(
              "flex items-center gap-2 text-white/80 hover:text-gw-sun transition-colors text-sm font-medium uppercase tracking-wider py-2",
              activeMenu === key && "text-gw-sun"
            )}
          >
            <item.icon size={18} />
            {item.title}
            <HiChevronDown size={14} className={cn(activeMenu === key && "rotate-180")} />
          </button>
        ))}
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[800px] bg-gw-forest rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
          >
            <div className="p-8">
              <div className="grid grid-cols-4 gap-8">
                {menuItems[activeMenu].sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-gw-sun text-xs font-bold uppercase tracking-wider mb-4">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link to={link.path} className="group block">
                            <div className="text-gw-leaf transition text-sm font-medium">{link.name}</div>
                            <div className="text-white/30 text-xs font-mono">{link.specs}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              
                <Link to="/contact" className="text-gw-sun text-sm font-bold uppercase tracking-wider hover:text-white transition">
                  Speak to an Engineer →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;