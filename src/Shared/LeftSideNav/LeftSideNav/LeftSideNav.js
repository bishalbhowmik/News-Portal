import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] =useState();


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data=>setCategories(data))
    },[]);

    return (
        <div>
            <h2>Left Side </h2>
            {
                categories?.map(c =><p key={c.id}>
                    <Link to={`/categories/${c.id}`}>{c.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;