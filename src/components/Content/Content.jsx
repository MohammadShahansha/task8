import React from 'react';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Content = (props) => {
    const { img, authorImg, name, date, time,title} = props.content;
    const handlerCart = props.handlerCart;
    const handleReadTime =props.handleReadTime;
    return (
        <div className='product-container-for-main'>
            <img src={img} alt="" />
            <div className='content-container'>
                <div className='author-info'>
                    <img src={authorImg} alt="" />
                    <div>
                        <h5 className='author-name'>{name}</h5>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='read-discription'>
                    <p>{time} min read</p>
                    {/* <p onClick={() => handlerCart(props.count)}><FontAwesomeIcon icon={faBookmark} /></p> */}
                    <p onClick={() => handlerCart(props.count,title)}><FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                {/* <a onClick={() => handleReadTime (time)} href="">Mark as read</a> */}
                <a className='markreed' onClick={() => handleReadTime (time)}>Mark as read</a>
                
            </div>
        </div>
    );
};

export default Content;