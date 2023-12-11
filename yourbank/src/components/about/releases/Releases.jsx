import './releases.css'
import program from '../../../img/Assets/program.png'
import opening from '../../../img/Assets/opening.png'
import nonprofit from '../../../img/Assets/nonprofit.png'
import initative from '../../../img/Assets/initiative.png'

function Releases() {
    return (
        <section className='releases' >
            <div className='container'>
                <div className='releases__container' >
                    <div className='releases__text-container' >
                        <h1>Press Releases</h1>
                        <p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
                    </div>
                    <div className='releases__sub-container' >
                        <div className='releases__row'>
                            <div className='releases__card' >
                                <img src={program} alt="program" />
                                <div className='releases__card-text' >
                                    <div className='releases__card-text-title' >
                                        <h1>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h1>
                                        <div>
                                            <div className='releases__card-text-info' >
                                                <span>Location: India</span>
                                            </div>
                                            <div className='releases__card-text-info' >
                                                <span>Date: 06/11/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.</p>
                                </div>
                            </div>
                            <div className='releases__card' >
                                <img src={opening} alt="opening" />
                                <div className='releases__card-text' >
                                    <div className='releases__card-text-title' >
                                        <h1>YourBank Expands Branch Network with Opening of New Location in Chennai</h1>
                                        <div>
                                            <div className='releases__card-text-info' >
                                                <span>Location: India</span>
                                            </div>
                                            <div className='releases__card-text-info' >
                                                <span>Date: 12/11/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.</p>
                                </div>
                            </div>
                        </div>
                        <div className='releases__row'>
                            <div className='releases__card' >
                                <img src={nonprofit} alt="nonprofit" />
                                <div className='releases__card-text' >
                                    <div className='releases__card-text-title' >
                                        <h1>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</h1>
                                        <div>
                                            <div className='releases__card-text-info' >
                                                <span>Location: India</span>
                                            </div>
                                            <div className='releases__card-text-info' >
                                                <span>Date: 24/12/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                                </div>
                            </div>
                            <div className='releases__card' >
                                <img src={initative} alt="initative" />
                                <div className='releases__card-text' >
                                    <div className='releases__card-text-title' >
                                        <h1>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h1>
                                        <div>
                                            <div className='releases__card-text-info' >
                                                <span>Location: India</span>
                                            </div>
                                            <div className='releases__card-text-info' >
                                                <span>Date: 28/12/2024</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p>YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Releases
