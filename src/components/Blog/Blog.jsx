import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h2>1.Write props vs state</h2>
                <h3>Ans:</h3>
                <p>(a)Props are read only and state changes can be asynchronous.</p>
                <p>(b)Props are immutable and state is mutable. </p>
                <p>(c)Props allow you to pass data from one component to other components as an argument and state holds information about the components</p>
            </div>
            <div>
                <h2>2.How does useState work?</h2>
                <h3>Ans:</h3>
                <p>UseState is React Hook that allows to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called</p>
            </div>
            <div>
                <h2>3.Purpose of useEffect other than fetching data.</h2>
                <h3>Ans:</h3>
                <p>It allows us to easily separate logic over several functions, instead of placing all the logic in a single function</p>
            </div>
            <div>
                <h2>4.How Does React work?</h2>
                <h3>Ans:</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            </div>
        </div>
    );
};

export default Blog;