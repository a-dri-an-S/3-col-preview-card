import "../styles/CardImage.css";

const CardImage = ({ title, image }) => {
    return (
        <img 
            className="card-img"
            src={image} 
            alt={`${title.toLowerCase()}-icon`}
        />
    );
}

export default CardImage;