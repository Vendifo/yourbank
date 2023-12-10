import './benefits.css'
import compensation from '../../../img/Assets/Compensation.svg'
import wellness from '../../../img/Assets/Wellness.svg'
import planning from '../../../img/Assets/Planning.svg'
import balance from '../../../img/Assets/Balance.svg'


function Benefits() {
    return (
        <section className='benefits'>
            <div className='container' >
                <div className='benefits__container' >
                    <div className='benefits__text-container'>
                        <h1>Our <span>Benefits</span></h1>
                        <p>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                    </div>
                    <div className='benefits__info-container'>
                        <div className='benefits__info-row' >
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={compensation} alt="compensation" /></div>
                                    <h1>Competitive Compensation</h1>
                                </div>
                                <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                            </div>
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={wellness} alt="wellness" /></div>
                                    <h1>Health and Wellness</h1>
                                </div>
                                <p>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
                            </div>
                        </div>
                        
                        <div className='benefits__info-row' >
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={planning} alt="planning" /></div>
                                    <h1>Retirement Planning</h1>
                                </div>
                                <p>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
                            </div>
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={balance} alt="balance" /></div>
                                    <h1>Work-Life Balance</h1>
                                </div>
                                <p>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Benefits