import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { HiArrowLeft, HiCheckCircle } from "react-icons/hi";
import Button from "../atoms/Button";
import { cn } from "../utils/cn";
import {SERVICES_DATA} from '../services/data'


const ServiceDetail = () => {
  const { id } = useParams();
  const data = SERVICES_DATA[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="pt-40 min-h-screen bg-gw-base">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gw-forest mb-4">Service Information</h2>
            <p className="text-slate-500 mb-8">The service details you're looking for are being prepared. Please check back soon or contact our engineering team directly.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gw-leaf text-white px-6 py-3 rounded-full hover:bg-gw-forest transition-colors">
              Speak to an Engineer
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gw-base min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        <Link to="/services" className="inline-flex items-center gap-2 text-gw-leaf hover:text-gw-forest mb-8 transition-colors">
          <HiArrowLeft /> Back to All Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <span className={cn("text-white px-3 py-1 rounded-full text-xs font-mono inline-block mb-4", data.accent)}>
                {data.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-gw-forest mt-2 mb-3 leading-tight">
                {data.title}
              </h1>
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-6 shadow-lg">
    <img 
      src={data.image || data.heroImage} 
      alt={data.title}
      className="w-full h-full object-cover"
    />
    {/* Optional: subtle gradient overlay at bottom of image */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
  </div>
              <p className="text-gw-leaf font-medium text-lg mb-6">{data.subtitle}</p>
              
              {/* Content paragraphs */}
              <div className="space-y-4 text-slate-600 leading-relaxed">
                {data.content.map((paragraph, idx) => {
                  if (paragraph.startsWith("The Service:")) {
                    return (
                      <div key={idx} className="bg-gw-base p-4 rounded-xl mt-4">
                        <span className="font-bold text-gw-forest">{paragraph}</span>
                      </div>
                    );
                  }
                  if (paragraph.startsWith("The Value:")) {
                    return (
                      <div key={idx} className="bg-gw-leaf/10 p-4 rounded-xl border-l-4 border-gw-leaf mt-4">
                        <span className="font-bold text-gw-forest">{paragraph}</span>
                      </div>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-gw-forest rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-serif mb-4">Discuss Your Project</h3>
                <p className="text-white/60 text-sm mb-6">
                  Speak directly with our engineering team about your specific solar or water requirements.
                </p>
                <Link to="/contact">
                  <Button className="w-full py-4 bg-gw-sun text-gw-forest hover:bg-white">
                    Speak to an Engineer
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h4 className="font-bold text-gw-forest mb-4">Why GreenWorld?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <HiCheckCircle className="text-gw-leaf" /> Right-sized solutions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <HiCheckCircle className="text-gw-leaf" /> Technical precision
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-600">
                    <HiCheckCircle className="text-gw-leaf" /> Local expertise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;