export const SERVICES_DATA = {
  "energy": {
    title: "Renewable Energy",
    subtitle: "Strategic Power Portfolio",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776246490/renewable_1_h5nxii.jpg",
    accent: "bg-gw-leaf",
    description: "GreenWorld leads Africa's energy transition through high-tier solar infrastructure and specialized technical consultation.",
    subServices: ["solar-solutions", "tech-consultation"] // Links to these pages
  },
  "solar-solutions": {
    title: "Solar Energy Solutions",
    subtitle: "C&I Engineering",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776246490/renewable_2_qfe4k8.jpg",
    accent: "bg-gw-leaf",
    description: "Specific solar infrastructure for industrial and commercial levels.",
    subServices: ["solar-pumping", "solar-desalination", "solar-cooking"],
    solutions: [
      { name: "Grid Infrastructure", details: ["Energy Audits", "On/Off Grid", "Storage Systems", "Commissioning"] }
    ]
  },
  "solar-pumping": {
    title: "Solar Pumping Systems",
    subtitle: "Fluid Engineering",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318782/solarpump_x51fkw.png",
    accent: "bg-gw-leaf",
    description: "High-efficiency solar pumping for borehole and surface water management.",
    solutions: [{ name: "Specifications", details: ["DC/AC Solar Pumps", "Automated Irrigation", "Remote Monitoring"] }]
  },
  "solar-desalination": {
    title: "Solar Desalination",
    subtitle: "Clean Water from Any Source",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318781/solar_desilanation_yqjykz.png",
    accent: "bg-gw-sky",
    description: "Solar-powered Reverse Osmosis systems for remote clean water access.",
    solutions: [{ name: "Specifications", details: ["Containerized Systems", "Off-grid RO", "Brine Management"] }]
  },
  "solar-cooking": {
    title: "Solar Cooking",
    subtitle: "Thermal Innovation",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776319747/solrcook_vqdtux.png",
    accent: "bg-gw-sun",
    description: "Industrial and institutional solar thermal cooking solutions.",
    solutions: [{ name: "Specifications", details: ["Parabolic Concentrators", "Community Solutions"] }]
  },

  // --- WATER SOLUTIONS HIERARCHY ---
  "water": {
    title: "Water Solutions",
    subtitle: "Life-Sustaining Infrastructure",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776246585/water_2_iq6tn6.jpg",
    accent: "bg-gw-sky",
    description: "Total liquid resource management from survey to purification.",
    subServices: ["water-purification", "borehole-services", "pumping-solutions"]
  },
  "water-purification": {
    title: "Water Purification",
    subtitle: "Treatment & RO Technology",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318784/water7_nhndm7.png",
    accent: "bg-gw-sky",
    description: "Advanced filtration and treatment solutions for safe water access.",
    solutions: [{ name: "Systems", details: ["Reverse Osmosis", "Ultrafiltration", "Wastewater Treatment"] }]
  },
  "borehole-services": {
    title: "Borehole Services",
    subtitle: "Subsurface Extraction",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318782/water5_pmagam.png",
    accent: "bg-slate-600",
    description: "Geophysical surveys and water borehole drilling expertise.",
    solutions: [{ name: "Capabilities", details: ["Geophysical Surveys", "Drilling", "Borehole Flushing"] }]
  },
  "pumping-solutions": {
    title: "Pumping Solutions",
    subtitle: "Sizing & Installation",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318785/water6_ltyktr.png",
    accent: "bg-gw-leaf",
    description: "Professional sizing and installation for surface and borehole pumps.",
    solutions: [{ name: "Hardware", details: ["Surface Pumps", "Borehole Pumps", "Technical Consultation"] }]
  },

  // --- EPC & TECH CONSULT ---
  "epc": {
    title: "EPC Services",
    subtitle: "Engineering, Procurement, & Construction",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776246652/construction_1_eteib3.jpg",
    accent: "bg-slate-700",
    description: "Full-cycle delivery of heavy industrial infrastructure.",
    solutions: [{ name: "EPC Cycle", details: ["Engineering Design", "Procurement Management", "Civil Construction"] }]
  },
  "tech-consultation": {
    title: "Tech Consultation",
    subtitle: "Energy Advisory",
    heroImage: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776320158/consult_j5rusp.png",
    accent: "bg-gw-forest",
    description: "Advisory for Wind, Nuclear, and Geothermal frontiers.",
    solutions: [
      { name: "Nuclear", img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318781/nuclear_fegnwh.png", details: ["Tech Consult"] },
      { name: "Geothermal", img: "https://res.cloudinary.com/dwt1u991q/image/upload/v1776318784/geothermal_ylzj6q.png", details: ["Exploration Consult"] }
    ]
  }
};