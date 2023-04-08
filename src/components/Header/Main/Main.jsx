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
                        content={content}
                    ></Content>)
                }
                {/* <div className='content-container'>
                    <div className='author-info'>
                        <h2>authore</h2>
                    </div>
                    <div className='reader-discription'>
                        <h1>readdd</h1>
                    </div>

                </div> */}
            </div>
            <div className='cart-container'>
                <h2>show cart</h2>
            </div>
        </div>
    );
};

export default Main;