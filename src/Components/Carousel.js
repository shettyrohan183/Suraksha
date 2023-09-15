import React, { useEffect, useState } from 'react'

export default function Carousel({images}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () =>{
            clearInterval(intervalId);
        };
    },[images]);
    const carouselStyle ={
        width : '100%',
        // height :'100vh',
        overflow :'hidden',
        position :'relative',
        marginLeft :'auto',
        marginRight :'auto',
        display :'flex',
        justiftcontent :'cenetr',
        borderradius : '30px',

    }
    const imageStyle ={
        backgroundsize: 'cover',
        backgroundposition: 'center',
        backgroundrepeat: 'no-repeat',
        borderradius : '30px',
        height: '500px', /* 30% of viewport height */
        width: '100%',
        position: 'relative', /* Enable relative positioning */
        // width : '50%',
        // height : '70%',
        // objectFit : 'fix',
    }
    const backgroundtext={
        position: 'absolute', /* Position the text absolutely within the container */
        bottom: '10px', /* Adjust the distance from the bottom */
        right: '10px', /* Adjust the distance from the right */
        fontweight: 'bold', /* Make the text bold */
        color: '#fff', /* Text color */
      }
      
  return (
    <div className='carousel' style={carouselStyle}>
        <img
        src ={`${process.env.PUBLIC_URL}/${images[currentImageIndex]}`}
        alt={`Slide ${currentImageIndex}`}
        style={imageStyle}
        />
         <div className="background-text" style={backgroundtext}>
        </div>
    </div>
  )
}
