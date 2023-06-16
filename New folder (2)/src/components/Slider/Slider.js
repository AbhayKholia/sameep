// import React from 'react';
// import "./Slider.scss";
// import {sliderImgs} from "../../utils/images";
// import Slider  from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Slider = () => {

//     let settings = {
//         autoplay:true,
//         autoplaySpeed:3000,
//         arrows:false,
//         dots: true,
//         Infinity: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     }
//   return (
//    <div className='slider'>
//     <div className='container'>
//         <div className='slider-content overflow-x-hidden'>
//             <Slider {...settings}>
//                <div className='slider-item'>
//                 <img src={sliderImgs[0]} alt=''/>
//                </div>
//             </Slider>
//         </div>
//     </div>
//    </div>
//     )
// }

// export default Slider






import React from 'react' 
import "react-slideshow-image/dist/styles.css"
import {Fade,Zoom,Slide} from "react-slideshow-image"
import "./Slider.scss";

const slideImages =[
    {
        url:"https://static.vecteezy.com/system/resources/thumbnails/005/992/414/small/electronics-store-that-sells-computers-tv-cellphones-and-buying-home-appliance-product-in-flat-background-illustration-for-poster-or-banner-vector.jpg"
    },
    {
        url:"https://c8.alamy.com/comp/G0TDCE/fashion-clothing-store-banner-with-shop-interior-clothing-on-hangers-G0TDCE.jpg"
    },
    {
        url:"https://cdn.dribbble.com/users/6046827/screenshots/15375566/media/6ac626ec63592e34c1b31d11fa1d8871.jpg?compress=1&resize=1000x750&vertical=center"
    },

]

const divStyle ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"400px",
    backgroundSize:"cover"
}

const Slider = () => {
  return (
    <div className='slide-container'>
        <Slide>
            {slideImages.map((image,index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>

                    </div>
                </div>
            ))}
        </Slide>
    </div>
  )
}

export default Slider