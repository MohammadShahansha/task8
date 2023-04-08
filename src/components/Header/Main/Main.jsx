import React, { useEffect, useState } from 'react';
import './Main.css';
import Content from '../../Content/Content';

const Main = () => {
    const [contents, setContents] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])
    // console.log(contents);
    return (
        <div className='main-container'>
            <div className='contents-container'>
                <h2>shower part</h2>
                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}
                    ></Content>)
                }
            </div>
            <div className='cart-container'>
                <h2>show cart</h2>
            </div>
        </div>
    );
};

export default Main;