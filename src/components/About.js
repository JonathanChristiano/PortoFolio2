//src/components/About.js

//mulai copy dari sini

import React from 'react';
import profile from '../assets/pp.jpg'

const About = () => {
    return (
    <section className="p-8">
        <div className="flex flex-col items-center">
        <img
            src={profile} // or require('../assets/profile.jpg') if in src/assets
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
        />
            <p className="text-lg text-center">
                Hello! I'm a passionate developer with expertise in building dynamic
                and responsive web applications. I love exploring new technologies and
                creating engaging user experiences.
            </p>
        </div>
    </section>
    );
};

export default About;

//akhir About.js
