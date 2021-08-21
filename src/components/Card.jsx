import React from 'react';
import './Card.css'

const Card = (props) => {
    const hasAButton = props.button;
    console.log(hasAButton);
    const styleCard = {
        border: '2px solid black',
        width: `${props.width}px`,
        borderRadius: '5px'
    };
    const button = () =>{
        if (props.button === true) {
            return <button className='card-button'>It's a button</button>}
        else return 
    }
    
    return ( 
        <section style={styleCard}>
            <div className="card-title-container">
                <h3>Card {props.title}</h3>
            </div>
            <article className="p-container">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed dolores accusamus lo</p>
            </article>
            {button()}
        </section>
     );
}
 
export default Card;