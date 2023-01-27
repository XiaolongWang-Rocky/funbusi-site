import aboutUsImg from '../images/about-us-img.jpg';

function AboutUs() {
    return (
        <section className="row funbusi_section" id="about_us">
            <div className="col-md-12">
                <h1 className="text-center funbusi_subtitle wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.5s">
                    About Us
                </h1>
                <div className="row about_us_section">
                    <div className="col-md-6 col-xs-12">
                        <p className="funbusi_para wow fadeInLeftBig animated" data-wow-duration="2s">
                            The principle of FUNBUSI is to make your business easy with our professional services.
                            Having practiced expertise and considerable experience in serving hospitality and retail
                            businesses, we are able to understand your needs accurately and offer the most appropriate
                            business solutions. <br/><br/>
                            “No quality no deal”, quality is the highest priority for us. All products we use are
                            carefully selected from our trusted partners who take the market leading positions in their
                            respective fields in Australia. In addition, our customer service is ready for you all the
                            time to guarantee that your business can operate steadily.<br/><br/>
                            Eliminating all your worries, FUNBUSI let you have fun with your business.
                        </p>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img alt="Bootstrap Image Preview" src={aboutUsImg} className="about_us_image wow fadeInRightBig animated" data-wow-duration="2s" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;