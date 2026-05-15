import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX, HiChevronDown, HiChevronRight } from "react-icons/hi";
import { cn } from "../utils/cn";
import Button from "../atoms/Button";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      {
        name: "Renewable Energy",
        path: "/services/energy",
        hasNested: true,
        nestedLinks: [
          { name: "Solar Solutions", path: "/services/solar-solutions" },
          { name: "Tech Advisory", path: "/services/tech-consultation" },
        ],
      },
      { name: "Water Solutions", path: "/services/water" },
      { name: "EPC Services", path: "/services/epc" },
    ],
  },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordions, setMobileAccordions] = useState({ services: false, renewable: false });
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and reset accordions when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileAccordions({ services: false, renewable: false });
    setActiveDropdown(null);
  }, [location]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click target is inside any dropdown menu or trigger button
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      const dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');
      
      let clickedInside = false;
      
      dropdownMenus.forEach(menu => {
        if (menu.contains(event.target)) {
          clickedInside = true;
        }
      });
      
      dropdownTriggers.forEach(trigger => {
        if (trigger.contains(event.target)) {
          clickedInside = true;
        }
      });
      
      if (!clickedInside && activeDropdown) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  // Handle ESC key to close dropdown
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [activeDropdown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6",
        scrolled ? "py-3 bg-gw-forest shadow-xl" : "py-6 bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white rounded-xl p-1.5 shadow-md group-hover:rotate-12 transition-transform duration-500">
            <img 
              src="https://res.cloudinary.com/dwt1u991q/image/upload/v1776160056/greenland_p4kxy3.jpg" 
              className="w-full h-full object-contain" 
              alt="Logo" 
            />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tighter transition-colors",
            scrolled ? "text-white" : "text-gw-forest"
          )}>
            GREENWORLD
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative py-2 nav-dropdown-trigger"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => cn(
                  "text-sm font-bold tracking-wide transition-all flex items-center gap-1.5",
                  isActive && link.path !== "#" ? "text-gw-leaf" : (scrolled ? "text-white/80" : "text-slate-600"),
                  "hover:text-gw-leaf"
                )}
              >
                {link.name}
                {link.dropdown && <HiChevronDown className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
              </NavLink>

              {/* LEVEL 1 DROPDOWN */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full -left-6 w-72 bg-white shadow-2xl rounded-[2.5rem] p-5 border border-slate-50 mt-2 dropdown-menu"
                  >
                    {link.dropdown.map((sub) => (
                      <div key={sub.name} className="relative group/nested">
                        <Link
                          to={sub.path}
                          className="flex items-center justify-between p-4 text-sm font-semibold text-slate-600 hover:bg-gw-base hover:text-gw-leaf rounded-2xl transition-all"
                        >
                          {sub.name}
                          {sub.hasNested && <HiChevronRight className="opacity-40 group-hover/nested:translate-x-1 transition-all" />}
                        </Link>

                        {/* LEVEL 2 DROPDOWN (Solar Specific) */}
                        {sub.hasNested && (
                          <div className="hidden group-hover/nested:block absolute left-full top-0 ml-2 w-64 bg-white shadow-2xl rounded-[2rem] p-4 border border-slate-50">
                            {sub.nestedLinks.map((deep) => (
                              <Link
                                key={deep.name}
                                to={deep.path}
                                className="block p-3 text-xs font-bold text-slate-500 hover:text-gw-leaf transition-colors uppercase tracking-widest"
                              >
                                {deep.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <Link to="/contact">
            <Button className="h-11 px-8 text-xs rounded-2xl">Get Started</Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden text-3xl z-[110] text-yellow-600"
>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
         <motion.div
  initial={{ x: "100%" }} 
  animate={{ x: 0 }} 
  exit={{ x: "100%" }}
  className="fixed inset-0 bg-white z-[100] p-10 pt-32 flex flex-col lg:hidden overflow-y-auto"
>
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="border-b border-slate-50 pb-4">
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => setMobileAccordions(prev => ({ ...prev, services: !prev.services }))}
                        className="text-3xl font-serif text-gw-forest flex items-center justify-between w-full"
                      >
                        {link.name} 
                        <HiChevronDown className={cn("transition-transform", mobileAccordions.services && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileAccordions.services && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }} 
                            className="overflow-hidden mt-6 flex flex-col gap-6 pl-4 border-l-2 border-gw-leaf/10"
                          >
                            {link.dropdown.map((sub) => (
                              <div key={sub.name}>
                                {sub.hasNested ? (
                                  <>
                                    <button 
                                      onClick={() => setMobileAccordions(prev => ({ ...prev, renewable: !prev.renewable }))}
                                      className="text-xl font-bold text-slate-700 flex items-center justify-between w-full"
                                    >
                                      {sub.name} 
                                      <HiChevronDown size={18} className={cn("transition-transform", mobileAccordions.renewable && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                      {mobileAccordions.renewable && (
                                        <motion.div 
                                          initial={{ height: 0, opacity: 0 }} 
                                          animate={{ height: "auto", opacity: 1 }} 
                                          exit={{ height: 0, opacity: 0 }}
                                          className="mt-4 flex flex-col gap-4 pl-4 overflow-hidden"
                                        >
                                          {sub.nestedLinks.map(deep => (
                                            <Link 
                                              key={deep.name} 
                                              to={deep.path} 
                                              className="text-sm font-bold text-gw-leaf uppercase tracking-widest"
                                              onClick={() => setIsOpen(false)}
                                            >
                                              {deep.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link 
                                    to={sub.path} 
                                    className="text-xl font-bold text-slate-700"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-4xl font-serif text-gw-forest"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-6 pt-10">
              <p className="text-slate-400 text-sm font-medium">contact@greenworldlimited.com</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gw-leaf/10 flex items-center justify-center text-gw-leaf italic font-serif">G</div>
                <div className="w-10 h-10 rounded-full bg-gw-sun/10 flex items-center justify-center text-gw-sun italic font-serif">W</div>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-16 text-lg rounded-[2rem]">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;