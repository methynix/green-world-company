import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiLightningBolt,  HiBriefcase } from "react-icons/hi";
import {FaTint} from "react-icons/fa"
import { GiSolarPower, GiWaterTank, GiDrill } from "react-icons/gi";
import { cn } from "../utils/cn";
import {serviceCategories} from '../services/data'


const Services = () => {
  return (
    <div className="pt-32 pb-20 bg-gw-base min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gw-leaf font-mono text-xs tracking-[0.3em] uppercase"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-gw-forest mt-4 leading-tight"
          >
            Solar <span className="italic text-gw-leaf">•</span> Water <span className="italic text-gw-leaf">•</span> Consultation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 text-lg"
          >
            Commercial & Industrial solar energy solutions, plus water treatment systems — delivered with technical precision.
          </motion.p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-4 mb-8">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", category.color)}>
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gw-forest">{category.title}</h2>
                  <p className="text-slate-500 text-sm">{category.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, idx) => (
                  <motion.div
  key={idx}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.05 }}
  whileHover={{ y: -5 }}
  className="group relative overflow-hidden rounded-2xl shadow-lg transition-all min-h-[220px]"
>
  <div className="absolute inset-0 z-0">
    <img 
      src={service.image || "https://res.cloudinary.com/dwt1u991q/image/upload/v1776160057/renewableEnergy_hzw4gx.jpg"} 
      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-500"
      alt={service.name}
    />
  </div>
  
  {/* Glassmorphism overlay */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] group-hover:bg-white/70 transition-all duration-500 z-0" />
  
  <div className="relative z-10 p-6">
    <h3 className="text-xl font-bold text-gw-forest mb-3">{service.name}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-4">
      {service.description}
    </p>
    <Link to={service.path}>
      <button className="flex items-center gap-2 text-gw-leaf text-sm font-medium hover:gap-3 transition-all">
        Learn More <HiArrowRight size={14} />
      </button>
    </Link>
  </div>
</motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gw-forest rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-serif mb-4">Need a customized solution?</h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Speak directly with our engineering team about your specific solar or water requirements.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-gw-sun text-gw-forest rounded-full font-medium hover:bg-white transition-colors">
              Speak to an Engineer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;