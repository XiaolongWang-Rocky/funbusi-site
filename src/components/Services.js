import ServiceCard from "./ServiceCard";
import { servicesList } from "../static-data";

function Services() {
    return (
        <section className="row funbusi_section" id="services_sec">
            <div className="col-md-12">
                <h1 className="text-center funbusi_subtitle wow fadeInUp animated" data-wow-duration="2s" data-wow-delay="0.5s">
                    Services
                </h1>
                <div className="row funbusi_cards_row">
                    {servicesList.slice(0,3).map(service=><ServiceCard key={service.id} {...service}/>)}
                </div>
                <div className="row funbusi_cards_row">
                    {servicesList.slice(3).map(service=><ServiceCard key={service.id} {...service}/>)}
                </div>
            </div>
        </section>
    )
}

export default Services;