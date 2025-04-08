import React from 'react';
import Courses from "../../components/courses/Сourses.jsx";
import Mentor from '../../Mentor/Mentor.jsx';
import Project from '../../Projects/Project.jsx';

const HomePage = () => {
    return (
        <div>
          <Courses />
          <Mentor/>
          <Project/>
        </div>
    );
};

export default HomePage;