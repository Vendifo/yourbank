import './cases.css'
import finances from '../../../img/Assets/finances.svg'
import future from '../../../img/Assets/future.svg'
import homeownership from '../../../img/Assets/homeownership.svg'
import funding from '../../../img/Assets/funding.svg'
import backgrondcase from '../../../img/Assets/Abstract Design3.svg'
import entrepreneurs from '../../../img/Assets/entrepreneurs.svg'
import management from '../../../img/Assets/management.svg'
import expansions from '../../../img/Assets/expansion.svg'
import solutions from '../../../img/Assets/solutions.svg'


function Cases () {
    return (
        <section className='cases'>
            <div className='container'>
                <div className='cases__container-text' >
                    <h1>Use Cases</h1>
                    <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                <div className='cases__info'>
                    <div className='cases__info-individuals' >
                        <div className='cases__info-cards' >

                            <img className='cases__info-card-img' src={backgrondcase} alt="backgrondcse" />
                            <div className='cases__info-card-container' >
                                <div className='cases__info-card' >
                                    <div><img src={finances} alt="finances" /></div>
                                    <span>Managing Personal Finances</span>
                                </div>
                                <div className='cases__info-card' >
                                    <div><img src={future} alt="future" /></div>
                                    <span>Saving for the Future</span>
                                </div>
                            </div>


                            <div className='cases__info-card-container'>
                                <div className='cases__info-card' >
                                    <div><img src={homeownership} alt="homeownership" /></div>
                                    <span>Homeownership</span>
                                </div>
                                <div className='cases__info-card' >
                                    <div><img src={funding} alt="funding" /></div>
                                    <span>Education Funding</span>
                                </div>
                            </div>
                        </div>


                        <div className='cases__for-individuals' >
                            <div className='cases__for-individuals-title' > 
                                <h1>For Individuals</h1>
                                <p>For individuals, our mortgage services pave the way to homeownership, 
                                    and our flexible personal loans provide vital support during various
                                     life milestones. We also prioritize retirement planning, ensuring a 
                                     financially secure future for our customers</p>
                            </div>
                            <div className='cases__for-individuals-text' >
                                <div>
                                    <h1>78%</h1>
                                    <p>Secure Retirement Planning</p>
                                </div>
                                <div>
                                    <h1>63%</h1>
                                    <p>Manageable Debt Consolidation</p>
                                </div>
                                <div>
                                    <h1>91%</h1>
                                    <p>Reducing financial burdens</p>
                                </div>
                            </div>
                            <button className='cases__for-individuals-button'>Learn More</button>
                        </div>
                    </div>
                    <div className='cases__info-business' >
                        <div className='cases__for-individuals' >
                            <div className='cases__for-individuals-title' > 
                                <h1>For Business</h1>
                                <p> For businesses, we empower growth with working capital solutions that optimize 
                                    cash flow, and our tailored financing options fuel business expansion. Whatever 
                                    your financial aspirations, YourBank is committed to providing the right tools 
                                    and support to achieve them</p>
                            </div>
                            <div className='cases__for-individuals-text' >
                                <div>
                                    <h1>65%</h1>
                                    <p>Cash Flow Management</p>
                                </div>
                                <div>
                                    <h1>70%</h1>
                                    <p>Drive Business Expansion</p>
                                </div>
                                <div>
                                    <h1>45%</h1>
                                    <p>Streamline payroll processing</p>
                                </div>
                            </div>
                            <button className='cases__for-individuals-button'>Learn More</button>
                        </div>
                        <div className='cases__info-cards' >

                            <img className='cases__info-card-img' src={backgrondcase} alt="backgrondcse" />
                            <div className='cases__info-card-container' >
                                <div className='cases__info-card' >
                                    <div><img src={entrepreneurs} alt="entrepreneurs" /></div>
                                    <span>Startups and Entrepreneurs</span>
                                </div>
                                <div className='cases__info-card' >
                                    <div><img src={management} alt="management" /></div>
                                    <span>Cash Flow Management</span>
                                </div>
                            </div>


                            <div className='cases__info-card-container'>
                                <div className='cases__info-card' >
                                    <div><img src={expansions} alt="expansions" /></div>
                                    <span>Cash Flow Management</span>
                                </div>
                                <div className='cases__info-card' >
                                    <div><img src={solutions} alt="solutions" /></div>
                                    <span>Payment Solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Cases