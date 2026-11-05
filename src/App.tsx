import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MotionGraphics from "./pages/MotionGraphics";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { ADMIN_PATH } from "./config/site";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  // Enables physics-based momentum smooth scroll for mouse wheel
  useSmoothScroll();

  return (
    <Routes>
      {/* Admin renders without the public navbar/footer. Access is enforced
          by Cloudflare Access on the path and by the Worker on /api/admin/*. */}
      <Route path={`${ADMIN_PATH}/*`} element={<Admin />} />

      <Route
        path="*"
        element={
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/motion-graphics" element={<MotionGraphics />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}
