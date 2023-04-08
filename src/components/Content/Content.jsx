import React from 'react';
import './Content.css';

const Content = (props) => {
    const {img} = props.content
    return (
        <div className='product-container-for-main'>
            <img src={img} alt="" />
        </div>
    );
};

export default Content;