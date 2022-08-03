import CardSection from "./CardSection";
import data from "../assets/data.js";
import "../styles/Card.css"

const Card = () => {
    return (
        <main className="preview-card">
            {
                data.map((car, index) => {
                    return (
                        <CardSection
                            key={index}
                            title={car.title}
                            image={car.image}
                            info={car.info}
                        />
                    )
                })
            }
        </main>
    );
}

export default Card;