import Banner from "../components/Banner";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Banner />
            <Services />
            <AboutUs />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home;