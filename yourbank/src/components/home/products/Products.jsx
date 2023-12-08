import './products.css'
import briefcase from '../../../img/Assets/briefcase.fill.svg'
import saving from '../../../img/Assets/saving.svg'
import laans from '../../../img/Assets/laans.svg'

function Products () {
    return (
        <section className='products' >
            <div className='container'>
                <div className='products__subcontainer-info'>
                    <div className='products__text-container'>
                        <h1>Our <span>Products</span></h1>
                        <p>Discover a range of comprehensive and customizable banking products at 
                            YourBank, designed to suit your unique financial needs and aspirations</p>
                    </div>
                    <div className='products__tabs'>
                        <button className='products__button-individuals' >For Individuals</button>
                        <button className='products__button-businesses' >For Businesses</button>
                    </div>
                </div>
                <div className='products__subcontainer-subinfo' >
                    <div className='products__cheching-accounts product-info '  >
                        <div className='products__subcontainer-icon' ><img src={briefcase} alt="briefcase" /></div>
                        <div className='products__subcontainer-text' >
                            <h1>Checking Accounts</h1>
                            <p>Enjoy easy and convenient access to your funds with our range of
                                 checking account options. Benefit from features such as online 
                                 and mobile banking, debit cards, and free ATM access.</p>
                        </div>
                    </div>
                    <div className='products__savings-accounts product-info' >
                        <div className='products__subcontainer-icon' ><img src={saving} alt="saving" /></div>
                        <div className='products__subcontainer-text'>
                            <h1>Savings Accounts</h1>
                            <p>Build your savings with our competitive interest rates and flexible 
                                savings account options. Whether you're saving for a specific goal
                                 or want to grow your wealth over time, we have the right account for you.</p>
                        </div>
                    </div>
                    <div className='products__laans product-info' >
                        <div className='products__subcontainer-icon' ><img src={laans} alt="laans" /></div>
                        <div className='products__subcontainer-text' >
                            <h1>Loans and Mortgages</h1>
                            <p>Realize your dreams with our flexible loan and mortgage options. From personal
                                 loans to home mortgages, our experienced loan officers are here to guide you
                                  through the application process and help you secure the funds you need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;