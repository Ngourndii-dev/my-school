import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div class="container mx-auto px-4">
      <Navbar />
      <Intro />
      <Company />
      <Contact />
      <Footer />
    </div>
  )
}
