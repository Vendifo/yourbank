import './excellence.css'
import excellenceImage from '../../../img/Assets/excellenceImage.png'
import abstract from '../../../img/Assets/Abstract Design3.svg'

function Excellence() {
    return (
        <section className='excellence' >
            <div className='container'>
                <div className='excellence__container' >
                    <div className='excellence__container-text' >
                        <h1>Where Banking Meets  <span>Excellence!</span></h1>
                        <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
                    </div>
                    <img className='excellence__background-images' src={excellenceImage} alt="excellenceImage" />
                    <img className='excellence__background-abstract' src={abstract} alt="abstract" />
                </div>
            </div>
        </section>
    );
}

export default Excellence