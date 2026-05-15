import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiLightningBolt, HiChartBar, HiShieldCheck } from "react-icons/hi";
import {FaTint} from "react-icons/fa";
import { GiSolarPower, GiWaterTank, GiDrill } from "react-icons/gi";
import Button from "../atoms/Button";
import { Section } from "../atoms/Section";
import { cn } from "../utils/cn";

const infoCards = [
  {
    title: "Solar Energy Solutions",
    icon: GiSolarPower,
    color: "bg-gw-leaf",
    description: "Commercial & Industrial solar systems from energy audits to full installation and maintenance.",
    image: "/CISolarInfra.jpg"
  },
  {
    title: "Water Solutions",
    icon: GiWaterTank,
    color: "bg-gw-sky",
    description: "Borehole drilling, reverse osmosis, and wastewater treatment for clean water at scale.",
    image: "/waterTreatment.png"
  }
];

const EnergyFlow = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
    <defs>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4DAD46" stopOpacity="0.4"/>
        <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#4DAD46" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <motion.path
      d="M 10 30 Q 30 20, 50 40 T 90 30"
      stroke="url(#flowGradient)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="8 8"
      initial={{ strokeDashoffset: 100 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M 10 60 Q 40 70, 60 50 T 90 60"
      stroke="url(#flowGradient)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="6 6"
      initial={{ strokeDashoffset: -100 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="bg-gw-base selection:bg-gw-leaf selection:text-white overflow-x-hidden">
      
      {/* HERO SECTION */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cdefs%3E%3Cpattern id=%27grid%27 width=%2760%27 height=%2760%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M60_0_L0_0_0_60%27 fill=%27none%27 stroke=%27%234DAD46%27 stroke-width=%270.5%27 stroke-opacity=%270.1%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27url(%23grid)%27/%3E%3C/svg%3E')] bg-repeat" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gw-leaf font-mono text-xs tracking-[0.3em] uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-6">
                SOLAR • WATER • CONSULTATION
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-gw-forest leading-[1.1] mb-6">
                Solar Energy Systems
                <br />
                <span className="text-gw-leaf italic">+ Water Solutions</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-md mb-8 leading-relaxed">
                Commercial & Industrial solar energy solutions, plus water treatment systems  delivered with technical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 text-base bg-gw-leaf hover:bg-gw-forest">
                    Speak to an Engineer <HiArrowRight />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="h-14 px-8 text-base border-gw-leaf text-gw-leaf hover:bg-gw-leaf/10">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Info Cards (No fake specs) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {infoCards.map((card, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl">
                  <div className="absolute inset-0">
                    <img src={card.image} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <div className="relative p-6">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", card.color)}>
                      <card.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gw-forest mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-sm">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <EnergyFlow />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gw-base to-transparent" />
      </div>

      {/* TECHNICAL PILLARS SECTION */}
      <Section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gw-leaf font-mono text-xs tracking-[0.3em] uppercase">Core Services</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gw-forest mt-4">
            What We <span className="italic text-gw-leaf">Deliver</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Solar Energy Solutions",
              icon: HiLightningBolt,
              color: "bg-gw-leaf",
              items: ["Energy Audits", "C&I Solar Infrastructure", "System Maintenance", "Solar Desalination", "Solar Pumping", "Solar Cooking"]
            },
            {
              title: "Water Solutions",
              icon: FaTint,
              color: "bg-gw-sky",
              items: ["Water Treatment", "Reverse Osmosis", "Borehole Drilling", "Borehole Flushing", "Pumping Solutions", "Wastewater Treatment"]
            },
            {
              title: "Technical Consultation",
              icon: HiChartBar,
              color: "bg-gw-sun",
              items: ["Wind Feasibility", "Geothermal Advisory", "Nuclear Transition Advisory"]
            }
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", pillar.color)}>
                <pillar.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gw-forest mb-4">{pillar.title}</h3>
              <ul className="space-y-2">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gw-leaf" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INTEGRATED SOLAR + WATER SECTION */}
      <Section className="py-24 bg-gw-forest text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gw-sun font-mono text-xs tracking-[0.3em] uppercase">Integrated Solutions</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">
                Solar-Powered
                <br />
                <span className="italic text-gw-sun">Water Systems</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Solar desalination and solar pumping systems combine PV efficiency with advanced hydraulics, delivering energy-independent water security.
              </p>
              <Link to="/contact">
                <Button className="bg-gw-sun text-gw-forest hover:bg-white">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gw-leaf/20 rounded-[3rem] blur-2xl" />
              <img 
                src="https://res.cloudinary.com/dwt1u991q/image/upload/v1776160057/renewableEnergy_hzw4gx.jpg"
                className="relative rounded-3xl shadow-2xl w-full"
                alt="Solar Water Integration"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="pb-32">
        <div className="bg-gw-forest rounded-4xl p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Ready to discuss your
              <br />
              <span className="text-gw-sun italic">Solar or Water project?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10">
              Speak directly with our engineering team about your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="h-14 px-10 bg-gw-sun text-gw-forest hover:bg-white">
                  Speak to an Engineer
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="h-14 px-10 border-white/30 text-white hover:bg-white/10">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;