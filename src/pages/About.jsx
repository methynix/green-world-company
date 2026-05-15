import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineGlobe, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const stats = [
  { label: "Renewable Projects", value: "500+", icon: HiOutlineBadgeCheck, color: "text-gw-leaf" },
  { label: "Water Systems", value: "1.2M", icon: HiOutlineUserGroup, color: "text-gw-sky" },
  { label: "Countries Served", value: "12+", icon: HiOutlineGlobe, color: "text-gw-sun" },
];

export const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="text-gw-leaf font-bold tracking-[0.2em] uppercase text-xs">Since 2026</span>
            <h2 className="text-5xl font-serif text-gw-forest mt-4 mb-6 leading-tight">Your Partner in Energy and  <br/><span className="italic text-gw-leaf">Water Solutions at Every Scale</span></h2>
            <div className="space-y-5 text-slate-600 leading-relaxed">
  <p className="text-lg font-medium text-gw-forest">From Factory Floors to Family Homes  Engineering Without Boundaries</p>
  
  <p>GreenWorld Company Limited is a multi-sectoral engineering firm incorporated under the Companies Act 2023. We deliver technical infrastructure  across the full spectrum  from <strong className="text-gw-forest">industrial-scale power plants and water treatment facilities</strong> to <strong className="text-gw-forest">domestic solar systems and household boreholes</strong>.</p>
  
  <p>Our technical divisions serve every client tier:</p>
  
  <div className="grid sm:grid-cols-2 gap-3 my-4">
    <div className="flex items-start gap-2">
      <HiOutlineBadgeCheck className="text-gw-leaf mt-0.5 flex-shrink-0" />
      <div>
        <span className="font-bold text-gw-forest">Industrial & Commercial</span>
        <p className="text-sm text-slate-500">Utility-scale solar farms, EPC contracts, municipal water treatment, geothermal exploration</p>
      </div>
    </div>
    <div className="flex items-start gap-2">
      <HiOutlineBadgeCheck className="text-gw-leaf mt-0.5 flex-shrink-0" />
      <div>
        <span className="font-bold text-gw-forest">Domestic & Small Business</span>
        <p className="text-sm text-slate-500">Home solar systems, residential boreholes, water purification units, solar cooking solutions</p>
      </div>
    </div>
  </div>

  <p>Our technical expertise spans <strong>geothermal exploration, wind resource assessment, and peaceful nuclear energy advisory</strong>  positioning us at the forefront of Africa's energy transition. Simultaneously, our local service teams ensure every Tanzanian household has access to <strong>clean water and reliable power</strong>.</p>
  
  <div className="bg-gw-base p-4 rounded-2xl border-l-4 border-gw-leaf mt-4">
    <p className="text-sm italic text-slate-600">"Whether you're powering a cement factory or lighting a family home  GreenWorld delivers engineering precision at every scale."</p>
  </div>
</div>
          </div>

          <div className="space-y-4">
  {/* Phone Support Card - Full width with internal grid */}
  <div className="p-6 bg-gw-base rounded-[2rem] border border-slate-100 shadow-sm">
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-gw-leaf/10 flex items-center justify-center flex-shrink-0">
        <HiOutlinePhone className="text-gw-leaf text-2xl" />
      </div>
      <div className="flex-1">
        <p className="text-gw-leaf font-bold text-xs mb-2 uppercase tracking-widest">24/7 Phone Support</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-1">Primary Line</p>
            <p className="text-gw-forest font-bold text-xl">+255 756 616 898</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">Secondary Line</p>
            <p className="text-gw-forest font-bold text-xl">+255 356 168 98</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Email Enquiries Card */}
  <div className="p-6 bg-gw-forest rounded-[2rem] text-white">
    <div className="flex items-start gap-5">
      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
        <HiOutlineMail className="text-gw-sun text-2xl" />
      </div>
      <div className="flex-1">
        <p className="text-gw-sun font-bold text-xs mb-2 uppercase tracking-widest">Email Enquiries</p>
        <p className="text-lg font-medium break-all">contact@greenworldlimited.com</p>
        <div className="flex gap-4 mt-3">
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">24/7 Response</span>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Technical Support</span>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full">Sales & Inquiries</span>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* GOOGLE MAPS INTEGRATION */}
        <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126781.93604470487!2d39.184323631988974!3d-6.768615015263623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c49008272545d%3A0x899f83a48e1b6f9e!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" 
            allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;