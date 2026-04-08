import React from 'react';
//TODO: fix the onClick type error
interface CardProps {
    num: string;
    label: string;
    image?: string;
    showButton?: boolean;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ num, label, image, showButton }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={label} className="card-img" />}
            <div className="card-num">{num}</div>
            <div className="card-label">{label}</div>
            {showButton &&
                <button
                    className="card-btn"
                    type="button"
                    onClick={onclick}
                >
                    Learn More
                </button>}
        </div>
    );
};

export default Card;