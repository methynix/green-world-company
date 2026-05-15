import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiMenu, HiX, HiChevronDown, HiSun, 
   HiBriefcase, HiChartBar,
  HiOfficeBuilding, HiCog,
  HiLightningBolt, HiServer
} from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import {FaTint,FaRecycle} from "react-icons/fa"
import { GiSolarPower, GiWaterTank, GiDrill} from "react-icons/gi";
import { cn } from "../utils/cn";
import {menuData} from '../services/data'



const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gw-base">
      {/* Navigation Bar */}
      <nav className={cn(
  "fixed top-0 w-full z-50 transition-all duration-500",
  isScrolled ? "bg-gw-forest shadow-lg py-4" : "bg-white py-6"
)}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gw-leaf rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className={cn(
  "font-serif font-bold text-xl tracking-tight transition-colors",
  isScrolled ? "text-white" : "text-gw-forest"
)}>
  GreenWorld<span className="text-gw-leaf">.</span>
</h1>
                <p className="text-[10px] font-mono text-white/70 tracking-wider -mt-1">
                  ENERGY • WATER • CONSULTATION
                </p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(menuData).map(([key, data]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenMenu(key)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className={cn(
  "flex items-center gap-1 font-medium transition-colors py-2",
  isScrolled ? "text-white/80 hover:text-gw-sun" : "text-gw-forest hover:text-gw-leaf"
)}>
                  <data.icon size={18} />
                  {data.title}
                  <HiChevronDown size={14} className={cn("transition-transform", openMenu === key && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {openMenu === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-[280px] bg-gw-forest rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="p-4">
                        <ul className="space-y-1">
                          {data.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.path}
                                className="block px-4 py-2 text-sm text-white/80 hover:text-gw-sun hover:bg-white/10 rounded-xl transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white/5 px-4 py-3 border-t border-white/10">
                        <Link to="/contact" className="flex items-center justify-between text-sm font-medium text-gw-sun hover:text-white transition-colors">
                          Speak to an Engineer <span>→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

           <Link to="/services" className={cn(
  "font-medium transition-colors",
  isScrolled ? "text-white/80 hover:text-gw-sun" : "text-gw-forest hover:text-gw-leaf"
)}>All Services</Link>
<Link to="/about" className={cn(
  "font-medium transition-colors",
  isScrolled ? "text-white/80 hover:text-gw-sun" : "text-gw-forest hover:text-gw-leaf"
)}>Company</Link>
            <Link to="/contact">
  <button className={cn(
    "px-6 py-2 rounded-full text-sm font-medium transition-all",
    isScrolled 
      ? "bg-gw-sun text-gw-forest hover:bg-white" 
      : "bg-gw-leaf text-white hover:bg-gw-forest"
  )}>
    Contact Engineers
  </button>
</Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden z-10">
            {isMobileMenuOpen ? <HiX size={24} className={isScrolled ? "text-gw-forest" : "text-white"} /> : <HiMenu size={24} className={isScrolled ? "text-gw-forest" : "text-white"} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gw-forest absolute top-full left-0 right-0 shadow-xl rounded-b-3xl overflow-hidden"
            >
              <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {Object.entries(menuData).map(([key, data]) => (
                  <div key={key}>
                    <h3 className={cn("font-bold flex items-center gap-2 mb-3 text-white", data.color)}>
                      <data.icon /> {data.title}
                    </h3>
                    <ul className="space-y-2 pl-6">
                      {data.items.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="text-sm text-white/70 hover:text-gw-sun">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Link to="/contact" className="block text-center py-3 bg-gw-sun text-gw-forest rounded-full font-medium">
                    Speak to an Engineer
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      <footer className="bg-gw-forest text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gw-leaf rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="font-serif font-bold text-white text-lg">GreenWorld</span>
              </div>
              <p className="text-sm leading-relaxed">
                Commercial & Industrial solar energy solutions, plus water treatment systems delivered with technical precision.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Solar Energy</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/energy-audits" className="hover:text-gw-sun transition-colors">Energy Audits</Link></li>
                <li><Link to="/services/on-grid-solar" className="hover:text-gw-sun transition-colors">C&I Solar Infrastructure</Link></li>
                <li><Link to="/services/solar-desalination" className="hover:text-gw-sun transition-colors">Solar Desalination</Link></li>
                <li><Link to="/services/solar-pumping" className="hover:text-gw-sun transition-colors">Solar Pumping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Water Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/water-treatment" className="hover:text-gw-sun transition-colors">Water Treatment</Link></li>
                <li><Link to="/services/borehole-drilling" className="hover:text-gw-sun transition-colors">Borehole Drilling</Link></li>
                <li><Link to="/services/reverse-osmosis" className="hover:text-gw-sun transition-colors">Reverse Osmosis</Link></li>
                <li><Link to="/services/wastewater-treatment" className="hover:text-gw-sun transition-colors">Wastewater Treatment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>+255 756 616 898</li>
                <li>contact@greenworldlimited.com</li>
                <li>Dar Es Salaam, Tanzania</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-xs">
            © 2026 GreenWorld Company Limited. Solar • Water • Technical Consultation
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;