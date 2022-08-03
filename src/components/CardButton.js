import "../styles/CardButton.css";

const CardButton = ({ title }) => {
    return (
        <button className={`card-section-btn ${title.toLowerCase()}-btn`}>
            Learn More
        </button>
    );
}

export default CardButton;