import "../styles/CardInfo.css";

const CardInfo = ({ title, info }) => {
    return (
        <div className="card-section-info">
            <h1 className="card-section-title">{title}</h1>
            <p className="card-section-text">{info}</p>
        </div>
    );
}

export default CardInfo;