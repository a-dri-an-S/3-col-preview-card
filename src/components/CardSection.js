import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardButton from "./CardButton";
import "../styles/CardSection.css";

const CardSection = ({ title, image, info }) => {
    return (
        <section className={`card-section ${title.toLowerCase()}-section`}>
            <div className="card-info-section">
                <CardImage
                    title={title}  
                    image={image}
                />
                <CardInfo 
                    title={title} 
                    info={info}
                />
            </div>
            <CardButton 
                title={title} 
            />
        </section>
    );
}

export default CardSection;