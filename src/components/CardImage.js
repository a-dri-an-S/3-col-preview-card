const CardImage = ({ title, image }) => {
    return (
        <img 
            className=""
            src={image} 
            alt={`${title.toLowerCase()}-icon`}
        />
    );
}

export default CardImage;