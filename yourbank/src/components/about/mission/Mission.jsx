import './mission.css'
import mission from '../../../img/Assets/mission.png'
import vision from '../../../img/Assets/vision.png'

function Mission() {
    return (
        <section className='mission' >
            <div className='container' >
                <div className='mission__container' >
                    <div className='mission_text-container' >
                        <h1>Mission & Vision</h1>
                        <p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
                    </div>
                    <div className='mission__sub-container' >
                        <div className='mission__row' >
                            <div className='mission__image-container'><img src={mission} alt="mission" /></div>
                            <div className='mission_sub-container-text' >
                                <h1>Mission</h1>
                                <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                            </div>
                        </div>
                        <div className='mission__row' >
                            <div className='mission_sub-container-text' >
                                <h1>Vision</h1>
                                <p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                            </div>
                            <div className='mission__image-container'><img src={vision} alt="vision" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission