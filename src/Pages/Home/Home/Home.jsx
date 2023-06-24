import React from 'react';
import Cover from '../Cover/Cover';
import About_me from '../About_me/About_me';
import My_skills from '../My_skills/My_skills';

const Home = () => {
    return (
        <div>
           <Cover></Cover>
           <About_me></About_me>
           <My_skills></My_skills>
        </div>
    );
};

export default Home;