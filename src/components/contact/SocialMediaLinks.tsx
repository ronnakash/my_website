import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


const SocialMediaLinks = () => {
    return (
        <div> 
            <SocialIcon className='social-icons' url="https://github.com/ronnakash/" />
            <SocialIcon className='social-icons' url="https://www.linkedin.com/in/ron-nakash-402912223/" />
            {/* <SocialIcon url="https://www.wa.me/972528629939/" /> */}
        </div>
    );
}

export default SocialMediaLinks;