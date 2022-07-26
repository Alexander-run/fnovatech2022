import React, { useState } from 'react';
import './aboutPage.css';

export default function About()  {

    return (
        <div>
           <h1>Who we Are</h1>
            <div id='about_introduce'>
                <p>Whether it be tackling devastating bushfires or helping the world to fight breast cancer. Here at Sunboost, we believe in giving back to the society and that's why we donate a significant portion of our profits to help fight the community crisis.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8Y7KjjpTuXU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>        
        </div>        
    );
}

