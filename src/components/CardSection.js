import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import CardButton from "./CardButton";

const CardSection = ({ title, image, info }) => {
    return (
        <section className={`${title}-section`}>
            <CardImage
                title={title}  
                image={image}
            />
            <CardInfo 
                title={title} 
                info={info}
            />
            <CardButton 
                title={title} 
            />
        </section>
    );
}

export default CardSection;