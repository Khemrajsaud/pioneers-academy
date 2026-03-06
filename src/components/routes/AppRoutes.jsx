import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Academics from "../../pages/Academics";
import Contact from "../../pages/Contact";
import Map from "../../pages/Map";
import Facilities from "../../pages/Facilities";
import Rules from "../../pages/Rules";
import ResourceGallery from "../../pages/ResourceGallery";
import ResourceNews from "../../pages/ResourceNews";
import PrincipleMessage from "../../pages/PrincipleMessage";
import ChairmanMessage from "../../pages/ChairmanMessage";
import BoardOfDirectors from "../../pages/BoardOfDirectors";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminLayout from "../layout/AdminLayout";
import AdminGallery from "../../pages/admin/AdminGallery";
import AdminNews from "../../pages/admin/AdminNews";
import AdminNotices from "../../pages/admin/AdminNotices";
import ResourcesNotice from "../../pages/ResourcesNotice";
import DetailedNews from "../../pages/DetailedNews";
import AdminResources from "../../pages/admin/AdminResources";
import ResourceDownloads from "../../pages/ResourceDownloads";
import NotFound from "../../pages/NotFound";




const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<Map />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/resources/gallery" element={<ResourceGallery />} />
        <Route path="/resources/news" element={<ResourceNews />} />
        {/* <Route path="/resources/routine" element={<ResourceRoutine />} />
        <Route path="/resources/downloads" element={<ResourceDownloads />} />
        <Route path="/resources/events" element={<ResourceEvents />} />
        <Route path="/resources/exams" element={<ResourceExams />} /> */}
        <Route path="/history" element={<PrincipleMessage />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/team" element={<BoardOfDirectors />} />
        <Route path="/resources/notices" element={<ResourcesNotice/>} />
        <Route path="/news/:id" element={<DetailedNews />} />
        <Route path="/resources/download" element={<ResourceDownloads/>} />
        <Route path="*" element={<NotFound />} />
      </Route>

     
      <Route 
        path="/admin" 
        element={
         
            <AdminLayout />
        
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="gallery" element={<AdminGallery/>} />
        <Route path="news" element={<AdminNews />} />
        <Route path="notices" element={<AdminNotices/>}/>
      
        <Route path="uploads" element={<AdminResources/>}/>
      </Route>
     
    </Routes>
  );
};

export default AppRoutes;
