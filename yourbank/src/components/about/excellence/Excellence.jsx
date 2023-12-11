import './excellence.css'
import excellenceImage from '../../../img/Assets/excellenceImage.png'
import abstract from '../../../img/Assets/Abstract Design3.svg'

function Excellence() {
    return (
        <section className='excellence' >
            <div className='container'>
                <div className='excellence__container' >
                    <div className='excellence__container-text' >
                        <h1>Welcome to <span>YourBank</span> Careers!</h1>
                        <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
                    </div>
                    <img className='excellence__background-images' src={excellenceImage} alt="excellenceImage" />
                    <img className='excellence__background-abstract' src={abstract} alt="abstract" />
                </div>
            </div>
        </section>
    );
}

export default Excellence