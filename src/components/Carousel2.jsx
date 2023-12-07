import React from 'react';
import Carousel from 'react-multi-carousel';
import '../styles/carousel.css';
import { Button } from 'react-bootstrap';

const Carousel2 = () => {
    return (
        <div className='container pt-5 pb-3'>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <h1 className='blog_heading mb-3'>Our Latest Blogs</h1>
            </div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='carosel1'>
                            <img style={{ width: '100%', marginBottom: "20px" }} src="././images/blog1.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Read More</Button>
                        </div>
                        <span style={{ padding: '10px' }}>11-07-2022</span>
                    </div>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='carosel1'>
                            <img style={{ width: '100%', marginBottom: "20px" }} src="././images/blog2.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Read More</Button>
                        </div>
                        <span style={{ padding: '10px' }}>11-07-2022</span>
                    </div>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='carosel1'>
                            <img style={{ width: '100%', marginBottom: "20px" }} src="././images/blog3.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Read More</Button>
                        </div>
                        <span style={{ padding: '10px' }}>11-07-2022</span>
                    </div>
                </div>

                <div className='carousel_con'>
                    <div className='carousel_main'>
                        <div className='carosel1'>
                            <img style={{ width: '100%', marginBottom: "20px" }} src="././images/blog2.png" alt="carousel" />
                        </div>
                        <div className='addcart_btn2'>
                            <Button>Read More</Button>
                        </div>
                        <span style={{ padding: '10px' }}>11-07-2022</span>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousel2;