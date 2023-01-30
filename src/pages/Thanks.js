import smile from '../images/smile.jpg';

function Thanks() {
    return (
        <div className="thanks">
            <img src={smile} alt='thanks'/>
            <p>Thank you for emailing us your query, and you will be contacted by our staff as soon as possible.</p>
        </div>
    )
}

export default Thanks;