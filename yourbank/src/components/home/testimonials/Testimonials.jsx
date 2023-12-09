import './testimonials.css'
import arrowleft from '../../../img/Assets/arrowleft.svg'
import arrowright from '../../../img/Assets/arrowright.svg'
import testimonialscard from '../../../img/Assets/testimonialscard.svg'

function Testimonials () {
    return (
        <section className='testimonials'>
            <div className='container' >
                <div className='testimonials__container'>
                    <div className='testimonials__info-container'>
                        <div className='testimonials__text-container' >
                            <h1>Our <span>Testimonials</span></h1>
                            <p>Discover how YourBank has transformed lives with
                                 innovative digital solutions and personalized
                                  customer service. See why our clients trust
                                   us for a secure and prosperous financial journey</p>
                        </div>
                        <div className='testimonials__tabs'>
                            <button className='testimonials__button-individuals' >For Individuals</button>
                            <button className='testimonials__button-businesses' >For Businesses</button>
                        </div>
                    </div>
                    <div className='testimonials__slider'>
                        <button className='testimonials__button' ><img src={arrowleft} alt="arrowleft" /></button>
                        <div className='testimonials__item-container'>
                            <div className='testimonials__card' >
                                <div className='testimonials__card-images' >
                                    <div className='item__line' ></div>
                                    <img src={testimonialscard} alt="testimonialscard" />
                                    <div className='item__line' ></div>
                                </div>
                                <p>YourBank has been my trusted financial partner for years. 
                                    Their personalized service and innovative digital banking 
                                    solutions have made managing my finances a breeze.</p>
                                <span>Sara T</span>
                            </div>
                            <div className='testimonials__card sl2' >
                                <div className='testimonials__card-images' >
                                    <div className='item__line' ></div>
                                    <img src={testimonialscard} alt="testimonialscard" />
                                    <div className='item__line' ></div>
                                </div>
                                <p>I recently started my own business, and YourBank has been 
                                    instrumental in helping me set up my business accounts 
                                    and secure the financing I needed. Their expert guidance 
                                    and tailored solutions have been invaluable.</p>
                                <span>John D</span>
                            </div>
                            <div className='testimonials__card sl3'  >
                                <div className='testimonials__card-images' >
                                    <div className='item__line' ></div>
                                    <img src={testimonialscard} alt="testimonialscard" />
                                    <div className='item__line' ></div>
                                </div>
                                <p>I love the convenience of YourBank's mobile banking app. 
                                    It allows me to stay on top of my finances and make 
                                    transactions on the go. The app is user-friendly and 
                                    secure, giving me peace of mind.</p>
                                <span>Emily G</span>
                                
                            </div>
                            <div className='testimonials__fadeoutleft' ></div>
                            <div className='testimonials__fadeouright' ></div>
                            
                        </div>
                        <button className='testimonials__button' ><img src={arrowright} alt="arrowright" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials