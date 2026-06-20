import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiLightningBolt, HiChartBar } from "react-icons/hi";
import { FaTint } from "react-icons/fa";
import { GiSolarPower, GiWaterTank } from "react-icons/gi";
import Button from "../atoms/Button";
import { Section } from "../atoms/Section";
import { cn } from "../utils/cn";

const infoCards = [
  {
    title: "Solar Energy Solutions",
    icon: GiSolarPower,
    color: "bg-gw-leaf",
    description: "Commercial & Industrial solar systems from energy audits to full installation and maintenance.",
    image: "/ciSolarInfra.jpg"
  },
  {
    title: "Water Solutions",
    icon: GiWaterTank,
    color: "bg-gw-sky",
    description: "Borehole drilling, reverse osmosis, and wastewater treatment for clean water at scale.",
    image: "/waterTreatment.png"
  }
];

// Engineering blueprint grid — fine lines layered over a coarser leaf grid.
const BlueprintGrid = () => (
  <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
    <defs>
      <pattern id="gw-grid-fine" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" fill="none" stroke="#1B3C35" strokeWidth="0.5" strokeOpacity="0.07" />
      </pattern>
      <pattern id="gw-grid-major" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M200 0H0V200" fill="none" stroke="#4DAD46" strokeWidth="0.75" strokeOpacity="0.12" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gw-grid-fine)" />
    <rect width="100%" height="100%" fill="url(#gw-grid-major)" />
  </svg>
);

// Ambient flow lines — solar (leaf) → sun → water (sky). Now has a viewBox so it
// actually spans the hero instead of collapsing into the corner.
const EnergyFlow = () => {
  const reduce = useReducedMotion();
  const anim = (offset, duration) =>
    reduce
      ? {}
      : {
          initial: { strokeDashoffset: offset },
          animate: { strokeDashoffset: 0 },
          transition: { duration, repeat: Infinity, ease: "linear" }
        };

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4DAD46" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0096D6" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 28 Q 30 18, 52 38 T 100 30"
        stroke="url(#flowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        vectorEffect="non-scaling-stroke"
        {...anim(40, 6)}
      />
      <motion.path
        d="M 0 68 Q 38 78, 60 52 T 100 64"
        stroke="url(#flowGradient)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="2 3"
        vectorEffect="non-scaling-stroke"
        {...anim(-40, 8)}
      />
    </svg>
  );
};

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  // Gentle parallax applied to the oversized blurred glows so no edges are revealed.
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div ref={containerRef} className="bg-gw-base selection:bg-gw-leaf selection:text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <BlueprintGrid />
          <motion.div style={{ y: glowY }} className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-[38rem] h-[38rem] rounded-full bg-gw-sun/20 blur-[120px]" />
            <div className="absolute -bottom-48 -left-40 w-[36rem] h-[36rem] rounded-full bg-gw-sky/15 blur-[120px]" />
            <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gw-leaf/10 blur-[120px]" />
          </motion.div>
          <EnergyFlow />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Side - Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 text-gw-leaf font-mono text-[0.7rem] tracking-[0.3em] uppercase bg-white border border-gw-leaf/20 shadow-sm px-4 py-2 rounded-full mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-gw-leaf" />
                Solar • Water • Consultation
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gw-forest leading-[1.05] tracking-tight mb-6">
                Solar Energy Systems
                <br />
                <span className="text-gw-leaf italic">+ Water Solutions</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-md mb-9 leading-relaxed">
                Commercial &amp; Industrial solar energy solutions, plus water treatment systems  delivered with technical precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 text-base bg-gw-leaf hover:bg-gw-forest shadow-lg shadow-gw-leaf/20">
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

            {/* Right Side - Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="space-y-6"
            >
              {infoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-900/5"
                >
                  {/* Image band — actually visible now */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                    <div className={cn("absolute -bottom-5 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-white", card.color)}>
                      <card.icon size={22} className="text-white" />
                    </div>
                  </div>
                  <div className="pt-8 px-6 pb-6">
                    <h3 className="text-xl font-bold text-gw-forest mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gw-base to-transparent z-[2]" />
      </section>

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
                src="solarDesilanation.jpg"
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
