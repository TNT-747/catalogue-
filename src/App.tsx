import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";

// Import Apps
import LuxeFashion from "./apps/LuxeFashion";
import SavoriaRestaurant from "./apps/SavoriaRestaurant";
import AdminDashboard from "./apps/AdminDashboard";
import EssencePerfume from "./apps/EssencePerfume";
import BookingHub from "./apps/BookingHub";
import TaskMasters from "./apps/TaskMasters";
import FitZone from "./apps/FitZone";
import InventoryManager from "./apps/InventoryManager";
import NexusSocial from "./apps/NexusSocial";
import CreativePortfolio from "./apps/CreativePortfolio";
import CryptoTracker from "./apps/CryptoTracker";
import StreamFlix from "./apps/StreamFlix";
import LearnHub from "./apps/LearnHub";
import MediCare from "./apps/MediCare";
import RealEstate from "./apps/RealEstate";
import FoodDelivery from "./apps/FoodDelivery";
import WeatherPro from "./apps/WeatherPro";
import MusicPlayer from "./apps/MusicPlayer";
import JobPortal from "./apps/JobPortal";
import ChatApp from "./apps/ChatApp";

function App() {

  return (
    <Router>
      <BackgroundEffects />
      <Routes>
        {/* App Routes (No Navbar/Footer) */}
        <Route path="/apps/luxe-fashion" element={<LuxeFashion />} />
        <Route path="/apps/savoria-restaurant" element={<SavoriaRestaurant />} />
        <Route path="/apps/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apps/essence-perfume" element={<EssencePerfume />} />
        <Route path="/apps/booking-hub" element={<BookingHub />} />
        <Route path="/apps/task-masters" element={<TaskMasters />} />
        <Route path="/apps/fit-zone" element={<FitZone />} />
        <Route path="/apps/inventory-manager" element={<InventoryManager />} />
        <Route path="/apps/nexus-social" element={<NexusSocial />} />
        <Route path="/apps/creative-portfolio" element={<CreativePortfolio />} />
        <Route path="/apps/crypto-tracker" element={<CryptoTracker />} />
        <Route path="/apps/stream-flix" element={<StreamFlix />} />
        <Route path="/apps/learn-hub" element={<LearnHub />} />
        <Route path="/apps/medi-care" element={<MediCare />} />
        <Route path="/apps/real-estate" element={<RealEstate />} />
        <Route path="/apps/food-delivery" element={<FoodDelivery />} />
        <Route path="/apps/weather-pro" element={<WeatherPro />} />
        <Route path="/apps/music-player" element={<MusicPlayer />} />
        <Route path="/apps/job-portal" element={<JobPortal />} />
        <Route path="/apps/chat-app" element={<ChatApp />} />
        
        {/* Portfolio Routes (With Navbar/Footer) */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

