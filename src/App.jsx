import React from 'react';
import Mentor from './Mentor/Mentor';
import Project from './Projects/Project';
import { Routes, Route } from 'react-router';
import Layout from "../src/Layout/Layout/Layout.jsx";
import MentorPage from "./pages/mentorpage/MentorPage.jsx";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage.jsx";
import СoursesPage from "./pages/СoursesPage/СoursesPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";



function App() {
    return (
        <div>
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
