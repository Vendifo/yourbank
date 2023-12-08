import './cta.css'
import desing3 from '../../../img/Assets/Abstract Design3.svg'

function Cta() {
    return (
        <section className='cta' >
            <div className='container' >
                <div className='cta__container'>
                    <img src={desing3} alt="desing3" />
                    <div className='cta__text-container' >
                        <h1>Start your financial journey with <span>YourBank today!</span></h1>
                        <p>Ready to take control of your finances? Join YourBank now, 
                            and let us help you achieve your financial goals with our 
                            tailored solutions and exceptional customer service</p>
                    </div>
                    <button>Open Account</button>
                </div>
            </div>
        </section>
    );
}

export default Cta;