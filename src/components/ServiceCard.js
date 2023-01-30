function ServiceCard(props) {
    return (
        <div className="col-md-4 funbusi_card_container">
            <svg className="funbusi_circle_svg">
                <circle className="wow funbusi_circle animated"></circle>
            </svg>
            <div className="card funbusi_card zoomIn animated wow">
                {props.title}
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default ServiceCard;