import React from 'react';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Hero2 from './components/hero2/Hero2';
import Reviews from "./components/reviews/Reviews.jsx";
import ContactForm from "./components/contactForm/ContactForm.jsx";
import { Routes, Route } from 'react-router';
import Layout from "../src/Layout/Layout/Layout.jsx";
import MentorPage from "./pages/mentorpage/MentorPage.jsx";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage.jsx";
import СoursesPage from "./pages/СoursesPage/СoursesPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
    return (
        <div>
            <div>
                <Hero/>
                <Card/>
                <Hero2/>
            </div>
            <div>
                <Reviews/>
                <ContactForm/>
            </div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="mentors" element={<MentorPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="courses" element={<СoursesPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
