import React from 'react';
import Mentor from './Mentor/Mentor';
import Project from './Projects/Project';
// const App = () => {
//     return (
//         <div>
//             <div><Mentor/>
//             <Project/>
//             </div>
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Hero2 from './components/hero2/Hero2';
import Reviews from "./component1/reviews/Reviews.jsx";
import ContactForm from "./component1/contactForm/ContactForm.jsx";
import { Routes, Route } from 'react-router';
import Layout from "../src/Layout/Layout/Layout.jsx";
import MentorPage from "./pages/mentorpage/MentorPage.jsx";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage.jsx";
// import СoursesPage from "./pages/СoursesPage/СoursesPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
// import { Routes, Route } from 'react-router';
// import Layout from "../src/Layout/Layout/Layout.jsx";
// import MentorPage from "./pages/mentorpage/MentorPage.jsx";
// import ProjectsPage from "./pages/ProjectPage/ProjectsPage.jsx";
// import HomePage from "./pages/HomePage/HomePage.jsx";

{/* function App() {
    return (
        <div>
            <div>
                <Hero/>
                <Card/>
                <Hero2/>
            </div>
                <Reviews/>
                <ContactForm/>
            </div> */}
import UsersLayout from './Layout/Layout/UsersLayout.jsx';
 function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="mentors" element={<MentorPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    {/* <Route path="courses" element={<СoursesPage />} /> */}
                </Route>

                
                <Route path="users"  element={<UsersLayout />}/>
                  
               
            </Routes>
        </div>
    );
}

export default App;
