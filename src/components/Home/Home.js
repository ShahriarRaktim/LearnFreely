import React, { useEffect, useState } from 'react';

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('./mediData.JSON')
           .then(res=> res.json()) 
           .then(data=> setCourses(data))
    },[])
    return (
        <div>
            {courses.length}
        </div>
    );
};

export default Home;