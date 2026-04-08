import React from 'react';

interface CardProps {
    num: string;
    label: string;
}

const Card: React.FC<CardProps> = ({ num, label }) => {
    return (
        <div className="card">
            <div className="card-num">{num}</div>
            <div className="card-label">{label}</div>
        </div>
    );
};

export default Card;