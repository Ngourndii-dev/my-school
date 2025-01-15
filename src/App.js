import Company from "./components/Company";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div class="container mx-auto px-4">
      <Navbar />
      <Intro />
      <Company />
      <Footer />
      <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br />
  World
</span>
    </div>
  )
}
