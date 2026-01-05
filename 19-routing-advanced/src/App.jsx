import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
          <Route path="/product/kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursesDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
