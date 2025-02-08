import './App.css'
import ClassRoom from "./components/ClassRoom";
import Company from "./components/Company";
import Event from "./components/Event";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

export default function App() {
    return ( 
        <div class = "container mx-auto px-6" >
            <Navbar / >
            <Intro / >
            <Event / >
            <ClassRoom / >
            <Company / >
            <Contact / >
            <Footer / >
        </div>
    )
}