import React from "react";

interface BtnTextProps {
    text: string | null;
    className: string;
    onClick: () => void;
    image: string | null;
}

const Btn: React.FC<BtnTextProps> = ({ text, className, onClick, image }) => {
    return (
        <div>
            <div onClick={onClick} className={className}>
                {image ? <img src={image} alt="coeur" /> : text}
            </div>
        </div>
    );
};

export default Btn;
