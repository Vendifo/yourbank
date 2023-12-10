import '../welcome/welcome.css'
import welcome from '../../../img/Assets/welcome.png'
import abstract from '../../../img/Assets/Abstract Design3.svg'

function Welcome() {
    return(
        <section className='welcome'>
            <div className='container'>
                <div className='welcome__container' >
                    <div className='welcome__container-text' >
                        <h1>Welcome to <span>YourBank</span> Careers!</h1>
                        <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
                    </div>
                    <img className='welcome__background-images' src={welcome} alt="welcome" />
                    <img className='welcome__background-abstract' src={abstract} alt="abstract" />
                </div>
            </div>
        </section>
    );
}

export default Welcome