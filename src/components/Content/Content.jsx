import React from 'react';
import './Content.css';

const Content = (props) => {
    const { img,authorImg,name,date,time} = props.content
    return (
        <div className='product-container-for-main'>
            <img src={img} alt="" />
            <div className='content-container'>
                <div className='author-info'>
                    <img src={authorImg} alt="" />
                    <div>
                        <h5>{name}</h5>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='reader-discription'>
                    <p>{time} min read</p>
                </div>
            </div>
        </div>
    );
};

export default Content;