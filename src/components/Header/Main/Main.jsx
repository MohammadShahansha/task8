import React, { useEffect, useState } from 'react';
import './Main.css';
import Content from '../../Content/Content';

const Main = () => {
    // console.log(handleReadTime);
    const [contents, setContents] = useState([])
    const [cart,setCart]=useState([])
    const [readTime, setReadTime] = useState("")
    
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    const handlerCart =(count) =>{
        const newCart = [...cart,count];
        setCart(newCart);
    }
    const handleReadTime = (t) =>{
        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        console.log(previousReadTime);
        if(previousReadTime){
            const sum = previousReadTime + t;
            localStorage.setItem("readTime",sum);
            setReadTime(sum);
        }
        else{
            localStorage.setItem("readTime",t);
            setReadTime(t);
        }
      }
    
    return (
        <div className='main-container'>
            <div className='contents-container'>
                <h2>shower part</h2>
                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}
                        handlerCart={handlerCart}
                        handleReadTime={handleReadTime}
                    ></Content>)
                }
            </div>
            <div className='cart-container'>
                <h2>show cart</h2>
                <h3 className='spent-time'>Spent time on read: <span>{readTime}</span> min</h3>
                <h3>Bookmarked Blogs : <span>{cart.length}</span></h3>
            </div>
        </div>
    );
};

export default Main;