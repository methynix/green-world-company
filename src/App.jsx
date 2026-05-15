import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import ProjectWizard from "./components/ProjectWizard";

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      
      {/* Layout wraps all routes */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      
      {/* Project Wizard - Outside Layout so it doesn't get trapped */}
      <ProjectWizard />
    </Router>
  );
}

export default App;