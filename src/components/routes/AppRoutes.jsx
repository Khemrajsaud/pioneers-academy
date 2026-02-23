import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Academics from "../../pages/Academics";
import Contact from "../../pages/Contact";
import Facilities from "../../pages/Facilities";
import Rules from "../../pages/Rules";
import Resources from "../../pages/Resources";
import ResourceGallery from "../../pages/ResourceGallery";
import ResourceNews from "../../pages/ResourceNews";
import ResourceRoutine from "../../pages/ResourceRoutine";
import ResourceDownloads from "../../pages/ResourceDownloads";
import ResourceEvents from "../../pages/ResourceEvents";
import ResourceExams from "../../pages/ResourceExams";
import ResourceParents from "../../pages/ResourceParents";
import PrincipleMessage from "../../pages/PrincipleMessage";
import BoardOfDirectors from "../../pages/BoardOfDirectors";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academic" element={<Academics />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/gallery" element={<ResourceGallery />} />
      <Route path="/resources/news" element={<ResourceNews />} />
      <Route path="/resources/routine" element={<ResourceRoutine />} />
      <Route path="/resources/downloads" element={<ResourceDownloads />} />
      <Route path="/resources/events" element={<ResourceEvents />} />
      <Route path="/resources/exams" element={<ResourceExams />} />
      <Route path="/resources/parents" element={<ResourceParents />} />
      <Route path="/history" element={<PrincipleMessage />} />
      <Route path="/team" element={<BoardOfDirectors />} />
    </Routes>
  );
};

export default AppRoutes;
