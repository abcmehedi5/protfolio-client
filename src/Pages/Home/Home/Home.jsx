import React from 'react';
import Cover from '../Cover/Cover';
import About_me from '../About_me/About_me';
import My_skills from '../My_skills/My_skills';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
           <Cover></Cover>
           <About_me ></About_me>
           <My_skills></My_skills>
           <Gallery></Gallery>
           <Service></Service>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;