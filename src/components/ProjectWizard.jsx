import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight, HiChevronLeft, HiX, HiLightningBolt,  HiLocationMarker } from "react-icons/hi";
import {FaTint} from "react-icons/fa"
import { cn } from "../utils/cn";
import { createPortal } from "react-dom";

const ProjectWizard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: "",
    loadProfile: "",
    waterFlow: "",
    location: "",
    name: "",
    email: "",
    phone: ""
  });

  const steps = [
    {
      title: "Project Type",
      description: "Select your primary infrastructure need",
      fields: ["projectType"],
      options: [
        { value: "solar", label: "Solar Energy Solutions", icon: HiLightningBolt, color: "bg-gw-leaf" },
        { value: "water", label: "Water Solutions", icon: FaTint, color: "bg-gw-sky" },
        { value: "consultation", label: "Technical Consultation", icon: HiLightningBolt, color: "bg-gw-sun" }
      ]
    },
    {
      title: "Project Details",
      description: "Tell us more about your requirements",
      fields: ["loadProfile"],
      condition: (data) => data.projectType === "solar",
      options: [
        { value: "energy-audit", label: "Energy Audit" },
        { value: "cni-solar", label: "C&I Solar Installation" },
        { value: "maintenance", label: "Maintenance" },
        { value: "solar-pumping", label: "Solar Pumping" },
        { value: "solar-desalination", label: "Solar Desalination" }
      ]
    },
    {
      title: "Project Details",
      description: "Tell us more about your water requirements",
      fields: ["waterFlow"],
      condition: (data) => data.projectType === "water",
      options: [
        { value: "borehole", label: "Borehole Drilling" },
        { value: "ro-system", label: "Reverse Osmosis" },
        { value: "treatment", label: "Water Treatment" },
        { value: "wastewater", label: "Wastewater Treatment" }
      ]
    },
    {
      title: "Project Details",
      description: "Tell us more about your consultation needs",
      fields: ["waterFlow"],
      condition: (data) => data.projectType === "consultation",
      options: [
        { value: "wind", label: "Wind Feasibility" },
        { value: "geothermal", label: "Geothermal Advisory" },
        { value: "nuclear", label: "Nuclear Transition Advisory" }
      ]
    },
    {
      title: "Your Information",
      description: "How can we reach you?",
      fields: ["location", "name", "email", "phone"],
      isContact: true
    }
  ];

  const getVisibleSteps = () => {
    return steps.filter(step => !step.condition || step.condition(formData));
  };

  const visibleSteps = getVisibleSteps();
  const currentStepData = visibleSteps[step];
  const isLastStep = step === visibleSteps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      console.log("Submitting:", formData);
      setIsOpen(false);
      setStep(0);
      setFormData({ projectType: "", loadProfile: "", waterFlow: "", location: "", name: "", email: "", phone: "" });
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);
  const updateField = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  // Don't render if no document element
  if (typeof document === "undefined") return null;

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-gw-leaf text-white p-4 rounded-full shadow-2xl hover:bg-gw-forest transition-all group"
      >
        <HiLightningBolt size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gw-forest text-white text-sm px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Quick Project Scoping
        </span>
      </button>

      {/* Modal using Portal */}
      {isOpen && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gw-forest px-6 py-4 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-xl">Project Scoping Wizard</h3>
                <p className="text-white/50 text-sm">Step {step + 1} of {visibleSteps.length}</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <HiX size={24} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-slate-100">
              <div 
                className="h-full bg-gw-leaf transition-all duration-300"
                style={{ width: `${((step + 1) / visibleSteps.length) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h4 className="text-2xl font-bold text-gw-forest mb-2">{currentStepData.title}</h4>
              <p className="text-slate-500 mb-8">{currentStepData.description}</p>

              {currentStepData.options ? (
                <div className="space-y-3">
                  {currentStepData.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        updateField(currentStepData.fields[0], opt.value);
                        handleNext();
                      }}
                      className={cn(
                        "w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition-all",
                        formData[currentStepData.fields[0]] === opt.value
                          ? "border-gw-leaf bg-gw-leaf/5"
                          : "border-slate-200 hover:border-gw-leaf/50"
                      )}
                    >
                      {opt.icon && <opt.icon size={24} className={opt.color} />}
                      <span className="font-medium">{opt.label}</span>
                      <HiChevronRight className="ml-auto text-slate-400" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-gw-leaf outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-gw-leaf outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-gw-leaf outline-none transition-all"
                  />
                  <div className="flex items-center gap-3 p-4 bg-gw-base rounded-2xl">
                    <HiLocationMarker className="text-gw-leaf" />
                    <input
                      type="text"
                      placeholder="Project Location"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      className="bg-transparent flex-1 outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-4 border-t border-slate-100">
                {step > 0 && (
                  <button onClick={handleBack} className="flex items-center gap-2 text-slate-500 hover:text-gw-forest">
                    <HiChevronLeft /> Back
                  </button>
                )}
                {currentStepData.options ? null : (
                  <button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email}
                    className="ml-auto flex items-center gap-2 px-6 py-3 bg-gw-leaf text-white rounded-full hover:bg-gw-forest transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLastStep ? "Submit Inquiry" : "Continue"}
                    <HiChevronRight />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </>
  );
};

export default ProjectWizard;