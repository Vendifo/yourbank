import './priority.css'
import priority from '../../../img/Assets/priority.png'
import abstract from '../../../img/Assets/Abstract Design3.svg'

function Priority() {
    return (
        <section className='priority' >
            <div className='container'>
                <div className='priority__container' >
                    <div className='priority__container-text' >
                        <h1>Your Security is Our <span>Top Priority</span></h1>
                        <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
                    </div>
                    <img className='priority__background-images' src={priority} alt="priority" />
                    <img className='priority__background-abstract' src={abstract} alt="abstract" />
                </div>
            </div>
        </section>
    );
}

export default Priority