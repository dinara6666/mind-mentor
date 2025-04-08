import React from 'react';
import Reviews from "./component1/reviews/Reviews.jsx";
import ContactForm from "./component1/contactForm/ContactForm.jsx";
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
