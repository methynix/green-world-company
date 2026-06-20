import {HiSun,HiBriefcase} from "react-icons/hi";
import {FaTint} from "react-icons/fa";
import {GiSolarPower,GiWaterTank} from "react-icons/gi"

export const menuData = {
  solar: {
    title: "Solar Energy",
    icon: HiSun,
    color: "text-gw-leaf",
    items: [
      { name: "Energy Audits", path: "/services/energy-audits" },
      { name: "C&I Solar Infrastructure", path: "/services/on-grid-solar" },
      { name: "Solar System Maintenance", path: "/services/solar-maintenance" },
      { name: "Solar Desalination Systems", path: "/services/solar-desalination" },
      { name: "Solar Pumping Systems", path: "/services/solar-pumping" },
      { name: "Solar Cooking Systems", path: "/services/solar-cooking" }
    ]
  },
  water: {
    title: "Water Solutions",
    icon: FaTint,
    color: "text-gw-sky",
    items: [
      { name: "Water Treatment Systems", path: "/services/water-treatment" },
      { name: "Reverse Osmosis (RO)", path: "/services/reverse-osmosis" },
      { name: "Filtration & Ultrafiltration", path: "/services/ultrafiltration" },
      { name: "Wastewater Treatment", path: "/services/wastewater-treatment" },
      { name: "Geophysical Surveys", path: "/services/borehole-services" },
      { name: "Water Borehole Drilling", path: "/services/borehole-drilling" },
      { name: "Borehole Flushing", path: "/services/borehole-flushing" },
      { name: "Pumping Solutions", path: "/services/pumping-solutions" }
    ]
  },
  consultation: {
    title: "Technical Consultation",
    icon: HiBriefcase,
    color: "text-gw-sun",
    items: [
      { name: "Wind Energy Feasibility", path: "/services/wind-assessment" },
      { name: "Geothermal Exploration Advisory", path: "/services/geothermal" },
      { name: "Nuclear Peaceful Transition Advisory", path: "/services/nuclear-consulting" }
    ]
  }
};

export const serviceCategories = [
  {
    id: "solar",
    title: "Solar Energy Solutions",
    subtitle: "Commercial & Industrial solar systems",
    color: "bg-gw-leaf",
    icon: GiSolarPower,
    services: [
      { name: "Energy Audits", path: "/services/energy-audits", description: "The Diagnostic Foundation We analyze your facility's current energy consumption patterns, identifying peaks, waste, and inefficiencies." },
      { name: "C&I Solar Infrastructure", path: "/services/on-grid-solar", description: "On-Grid, Off-Grid, and Hybrid systems  Design, Supply, Installation, and Commissioning." },
      { name: "Solar System Maintenance", path: "/services/solar-maintenance", description: "Lifecycle Assurance Systematic cleaning, electrical health checks, and performance monitoring." },
      { name: "Solar Desalination Systems", path: "/services/solar-desalination", description: "Solar-powered Reverse Osmosis and filtration units for brackish or saline water." },
      { name: "Solar Pumping Systems", path: "/services/solar-pumping", description: "High-efficiency solar pumping arrays for agricultural irrigation and water distribution." },
      { name: "Solar Cooking Systems", path: "/services/solar-cooking", description: "Large-scale solar thermal cooking for schools, hospitals, and factory canteens." }
    ]
  },
  {
    id: "water",
    title: "Water Solutions",
    subtitle: "Purity at Scale & Science-Led Groundwater",
    color: "bg-gw-sky",
    icon: GiWaterTank,
    services: [
      { name: "Water Treatment Systems", path: "/services/water-treatment", description: "Advanced treatment technologies for raw water into high-spec process water or potable supply." },
      { name: "Reverse Osmosis (RO)", path: "/services/reverse-osmosis", description: "High-capacity RO units to remove salts, minerals, and contaminants." },
      { name: "Filtration & Ultrafiltration", path: "/services/ultrafiltration", description: "Multi-media filters and advanced membrane ultrafiltration for suspended solids." },
      { name: "Wastewater Treatment", path: "/services/wastewater-treatment", description: "Treat and recycle process water, turning waste into a reusable resource." },
      { name: "Geophysical Surveys", path: "/services/borehole-services", description: "Scientific mapping to identify high-yield aquifers before drilling begins." },
      { name: "Water Borehole Drilling", path: "/services/borehole-drilling", description: "Heavy-duty industrial rigs drilling to precise depths with proper casing." },
      { name: "Borehole Flushing", path: "/services/borehole-flushing", description: "High-pressure flushing to clear silt and maximize water flow rate." },
      { name: "Pumping Solutions", path: "/services/pumping-solutions", description: "Sizing, supply, and installation of submersible and surface pumps." }
    ]
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    subtitle: "Strategic Energy Advisory",
    color: "bg-gw-sun",
    icon: HiBriefcase,
    services: [
      { name: "Wind Energy Feasibility", path: "/services/wind-assessment", description: "Micro-siting analysis, wind resource assessment, and turbine technology selection." },
      { name: "Geothermal Exploration Advisory", path: "/services/geothermal", description: "Technical advisory on geothermal surface exploration and heat-gradient mapping." },
      { name: "Nuclear Peaceful Transition Advisory", path: "/services/nuclear-consulting", description: "Strategic advisory on regulatory frameworks, safety protocols, and technical infrastructure." }
    ]
  }
]

export const SERVICES_DATA = {
  "energy-audits": {
    title: "Energy Audits",
    subtitle: "The Diagnostic Foundation",
    heroImage: "/energyAudits.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "Before a single panel is mounted, GreenWorld conducts a comprehensive Energy Audit. We believe that \"an unmeasured load is an unmanaged cost.\"",
      "The Service: We analyze your facility's current energy consumption patterns, identifying peaks, waste, and inefficiencies.",
      "The Value: We don't guess your needs. Our audits ensure that the solar system we eventually design is perfectly \"right-sized\"preventing you from overpaying for capacity you don't use or suffering from a system that underperforms."
    ]
  },
  "on-grid-solar": {
    title: "C&I Solar Infrastructure",
    subtitle: "On-Grid, Off-Grid, and Hybrid",
    heroImage: "/ciSolarInfra.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "We handle the full lifecycle: Design, Supply, Installation, and Commissioning.",
      "On-Grid Solutions: Ideal for urban commercial centers looking to drastically reduce monthly utility bills by feeding solar power directly into their existing connection.",
      "Off-Grid Solutions: Designed for remote industrial sites (mining, agriculture, or lodges) where the national grid is unavailable. We provide total energy independence.",
      "On-Grid with Storage (Hybrid): The gold standard for \"Mission Critical\" operations. We combine grid connectivity with advanced battery storage to ensure that even during a grid failure, your machinery and servers never stop."
    ]
  },
  "solar-maintenance": {
    title: "Solar System Maintenance",
    subtitle: "Lifecycle Assurance",
    heroImage: "/solarSystemMaintenance.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "Solar assets are 25-year investments. GreenWorld provides specialized maintenance to protect that investment.",
      "The Service: Systematic cleaning, electrical health checks, and performance monitoring.",
      "The Value: Dust, heat, and minor wiring faults can degrade output by up to 30%. Our maintenance team ensures your system operates at its theoretical maximum, protecting your Return on Investment (ROI)."
    ]
  },
  "solar-desalination": {
    title: "Solar Desalination Systems",
    subtitle: "Solar-Powered Water Treatment",
    heroImage: "/solarDesilanation.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "In regions where water quality is a barrier to industry, we integrate energy and water solutions.",
      "The Service: We deploy solar-powered Reverse Osmosis and filtration units to turn brackish or saline water into high-purity industrial or potable water.",
      "The Value: This eliminates the massive electrical cost usually associated with water treatment, making clean water sustainable even in the most arid environments."
    ]
  },
  "solar-pumping": {
    title: "Solar Pumping Systems",
    subtitle: "High-Efficiency Water Movement",
    heroImage: "/solarPumping.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "For agricultural irrigation and large-scale water distribution, GreenWorld designs high-efficiency solar pumping arrays.",
      "The Service: Replacing expensive, high-maintenance diesel generators with silent, automated solar pumps.",
      "The Value: We provide a \"set-and-forget\" water supply. Once installed, the fuel cost is zero, allowing for scalable agricultural or industrial water movement without the logistics of fuel transport."
    ]
  },
  "solar-cooking": {
    title: "Solar Cooking Systems",
    subtitle: "Institutional Solar Thermal",
    heroImage: "/solarCooking.jpg",
    accent: "bg-gw-leaf",
    category: "Solar Energy Solutions",
    content: [
      "Designed for institutional use (schools, hospitals, and large factory canteens), our solar cooking solutions replace traditional biomass or expensive LPG.",
      "The Service: Implementation of large-scale solar thermal or PV-driven cooking infrastructure.",
      "The Value: It drastically reduces carbon footprints and operational kitchen costs while improving the health and safety of the cooking environment."
    ]
  },

  "water-treatment": {
    title: "Water Treatment Systems",
    subtitle: "Purity at Scale",
    heroImage: "/waterTreatment.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "GreenWorld provides advanced treatment technologies designed to transform raw water into high-spec process water or potable supply.",
      "Reverse Osmosis (RO) Systems: We design and deploy high-capacity RO units to remove salts, minerals, and contaminants. This is essential for industrial processes requiring high-purity water and for regions dealing with brackish groundwater.",
      "Filtration & Ultrafiltration Systems: From multi-media filters to advanced membrane ultrafiltration, we target suspended solids and microbiological threats, providing a crystal-clear supply for commercial use.",
      "Wastewater Treatment Systems: To help companies meet environmental regulations and reduce costs, we implement systems that treat and recycle process water, turning waste into a reusable resource.",
      "Technical Consultancy: Our water treatment is backed by engineering data. We provide consultancy on system optimization, chemical balance, and membrane longevity to ensure your treatment plant operates at peak efficiency."
    ]
  },
  "reverse-osmosis": {
    title: "Reverse Osmosis (RO) Systems",
    subtitle: "High-Purity Water Production",
    heroImage: "/reverseOsmosis.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "We design and deploy high-capacity RO units to remove salts, minerals, and contaminants.",
      "This is essential for industrial processes requiring high-purity water and for regions dealing with brackish groundwater."
    ]
  },
  "ultrafiltration": {
    title: "Filtration & Ultrafiltration",
    subtitle: "Membrane Technology",
    heroImage: "/ultrafiltration.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "From multi-media filters to advanced membrane ultrafiltration, we target suspended solids and microbiological threats.",
      "We provide a crystal-clear water supply for commercial use."
    ]
  },
  "wastewater-treatment": {
    title: "Wastewater Treatment Systems",
    subtitle: "Turn Waste into Resource",
    heroImage: "/waterTreatment.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "To help companies meet environmental regulations and reduce costs, we implement systems that treat and recycle process water.",
      "We turn waste into a reusable resource."
    ]
  },
  "borehole-services": {
    title: "Geophysical Surveys",
    subtitle: "Science-Led Groundwater Acquisition",
    heroImage: "/geophysicalSurveys.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "We don't just \"dig wells\"—we engineer groundwater assets. GreenWorld manages the entire extraction lifecycle to ensure long-term borehole viability.",
      "Geophysical Surveys: We use scientific mapping to identify high-yield aquifers before drilling begins. This data-driven approach minimizes the risk of \"dry holes\" and protects your investment."
    ]
  },
  "borehole-drilling": {
    title: "Water Borehole Drilling",
    subtitle: "Heavy-Duty Industrial Rigs",
    heroImage: "/boreHole.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "Utilizing heavy-duty industrial rigs, we drill to precise depths, ensuring the borehole is cased and screened correctly to prevent collapse and contamination."
    ]
  },
  "borehole-flushing": {
    title: "Water Borehole Flushing",
    subtitle: "Maximize Flow Rate",
    heroImage: "/boreholeflushing.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "We perform high-pressure flushing to develop the borehole, clearing out silt and debris to maximize the water flow rate and extend the life of the pump."
    ]
  },
  "pumping-solutions": {
    title: "Pumping Solutions",
    subtitle: "Borehole & Surface Pumps",
    heroImage: "/waterPumping.png",
    accent: "bg-gw-sky",
    category: "Water Solutions",
    content: [
      "The Service: Full-scale sizing, supply, installation, and commissioning of submersible and surface pumps.",
      "Technical Consultation: We calculate the \"Total Dynamic Head\" and flow requirements to ensure the pump we install is perfectly matched to your site's hydraulics—avoiding premature pump failure and energy waste."
    ]
  },

  "wind-assessment": {
    title: "Wind Energy Feasibility",
    subtitle: "Site Assessment & Resource Analysis",
    heroImage: "/windEnergyFeasibility.png",
    accent: "bg-gw-sun",
    category: "Technical Consultation",
    content: [
      "Wind power requires precise atmospheric data and logistical planning.",
      "The Consultation: We provide micro-siting analysis, wind resource assessment, and turbine technology selection.",
      "The Value: We help you determine if a site is truly viable for wind energy, preventing costly investments in locations with insufficient wind density."
    ]
  },
  "geothermal": {
    title: "Geothermal Exploration Advisory",
    subtitle: "East African Rift Potential",
    heroImage: "/geothermalNuclear.png",
    accent: "bg-gw-sun",
    category: "Technical Consultation",
    content: [
      "Tanzania sits on the edge of the East African Rift, a prime location for geothermal energy.",
      "The Consultation: GreenWorld offers technical advisory on geothermal surface exploration and heat-gradient mapping.",
      "The Value: We bridge the gap between geological potential and mechanical execution, providing the roadmap for steam-to-power conversion."
    ]
  },
  "nuclear-consulting": {
    title: "Nuclear Energy Advisory",
    subtitle: "Peaceful Transition Consulting",
    heroImage: "/geothermalNuclear.png",
    accent: "bg-gw-sun",
    category: "Technical Consultation",
    content: [
      "As Africa looks toward base-load energy security, nuclear energy is becoming a critical conversation.",
      "The Consultation: We provide strategic advisory on the regulatory frameworks, safety protocols, and technical infrastructure required for a peaceful nuclear transition.",
      "The Value: We act as the technical intermediary, ensuring that policy-makers and industrial players understand the long-term lifecycle and safety requirements of modern nuclear technology."
    ]
  }
};