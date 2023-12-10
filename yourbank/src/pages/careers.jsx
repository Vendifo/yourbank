import Header from '../components/home/header/Header';
import Welcome from '../components/careers/welcome/Welcome';
import Values from '../components/careers/values/Values';
import Benefits from '../components/careers/benefits/Benefits';
import Openings from '../components/careers/openings/Openings';


import Questions from '../components/home/questions/Questions';
import Cta from '../components/home/cta/Cta';
import Footer from '../components/home/footer/Footer';




function Careers() {
    return (
        <div>
            <Header />
            <Welcome />
            <Values />
            <Benefits />
            <Openings />
            <Questions />
            <Cta />
            <Footer />
            
        </div>
    );
}

export default Careers