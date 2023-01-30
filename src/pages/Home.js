import Banner from "../components/Banner";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <AboutUs />
            <ContactUs />
            <Footer />
            <ScrollToTop smooth color="white" top={300} style={{backgroundColor: '#fcab2f'}}/>
        </div>
    )
}

export default Home;